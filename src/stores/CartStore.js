import Immutable from 'immutable';
import alt from '../alt';
import CartActions from '../actions/CartActions';
import FundStore from './FundStore';
import ProductStore from './ProductStore';

class CartStore {
  constructor() {
    // Initial state of `cart` so we can reuse it,
    // when the CartActions dispatches `clear`
    this._cart = new Immutable.List();
    this.cart = this._cart;
    this.bindActions(CartActions);
    
    this.exportPublicMethods({ getProductIndex: this.getProductIndex.bind(this) });
  }

  onAdd(id) {
    this.waitFor(FundStore);
    const funds = FundStore.getState().funds;
    const products = ProductStore.getState().products;

    try {
      var index = this.getProductIndex(id);
    } catch(e) {
      // New entry
      var productIndex = ProductStore.getProductIndex(id);
      var product = products.get(productIndex);
      var entry = product.set('quantity', 1);
      var stock = product.get('stock');
      var diff = funds - product.get('price');

      if ( stock == 0 || diff < 0 ) {
        return false;
      }

      this.cart = this.cart.push(entry);
      return;
    }

    var productIndex = ProductStore.getProductIndex(id);
    var product = products.get(productIndex);
    var stock = product.get('stock');
    var diff = funds - product.get('price');

    if ( stock === 0 || diff < 0 ) {
      return false;
    }

    this.cart = this.cart.update(index, (product) => {
      return product.update('quantity', v => v + 1);
    });
  }

  onClear() {
    // Simply reassign our `carts` state
    // to `_carts` since we created a snapshot
    // of its init state on the class constructor
    this.cart = this._cart;
  }

  onCheckout() {
    // The same as `checkout` (above), but in this case
    // only the CartStore would listen to the `checkout`
    // action
    this.cart = this._cart;
  }

  onDecrease(id) {
    const i = this.getProductIndex(id);

    // Either remove the product or reduce the quantity.
    this.cart = this.cart.get(i).get('quantity') > 1
      ? this.cart.update(i, product => product.update('quantity', v => v - 1))
      : this.cart.delete(i);
  }

  onRemove(id) {
    this.waitFor(FundStore);

    const i = this.getProductIndex(id);
    this.cart = this.cart.delete(i);
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
      .findIndex(product => product.get('id') === id);

    // Throw an error if the product does not exist
    // >> `findIndex` returns -1 when an index was not found
    if ( index == -1 ) {
      throw new Error(`Product with the id ${id} does not exist`);
    }

    return index;
  }
}

export default alt.createStore(CartStore);
