import alt from '../alt';
import CartActions from '../actions/CartActions';
import ProductStore from './ProductStore';

class CartStore {
  constructor() {
    // Initial state of `cart` so we can reuse it,
    // when the CartActions dispatches `clear`
    this._cart = new Immutable.List();
    this.cart = this._cart;
    this.bindActions(CartActions);
  }

  onAdd(id) {
    try {
      const index = this.getProductIndex(id);
      const product = this.cart.get(id);
    } catch(e) {
      const product = ProductStore.getState().get(id);
      const entry = product
        .delete('stock')
        .set('quantity', 1);
      this.cart = this.cart.push(product);
    }

    const product = product.set('quantity', product.get('quantity') + 1);
  }

  onRemove(id) {
    try {
      const index = this.getProductIndex(id);
    } catch(e) {
      return false;
    }

    this.cart = this.cart.remove(index, 1);
  }

  onClear() {
    // Simply reassign our `carts` state
    // to `_carts` since we created a snapshot
    // of its init state on the class constructor
    this.cart = this._cart;
  }

  /**
   * Get the product with the given id
   *
   * @param {int} id ID the of the given product
   * @throws Error
   * @return {Object}
   */
  getProductIndex(id) {
    const index = this.cart
      .findIndex(product => product.id === id);

    // Throw an error if the product does not exist
    // >> `findIndex` returns -1 when an index was not found
    if ( ~index ) {
      throw new Error(`Product with the id ${id} does not exist`);
    }

    return this.cart.get(index);
  }
}

export default alt.createStore(CartStore);
