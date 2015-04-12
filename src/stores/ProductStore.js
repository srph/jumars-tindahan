import Immutable from 'immutable';
import alt from '../alt';
import data from '../data';
import CartActions from '../actions/CartActions';
import CartStore from './CartStore';

class ProductStore {
  constructor() {
    // Initial state of product so we can reuse it,
    // when the CartActions dispatches `clear`
    this._products = Immutable.fromJS(data);
    this.products = this._products;
    this.bindActions(CartActions);

    // We'll expose this store's getter for CartStore's use
    this.exportPublicMethods({ getProductIndex: this.getProductIndex });
  }

  onCartAdd(id) {
    try {
      const index = this.getProductIndex(id);
    } catch(e) {
      return false;
    }

    const stock = this.products.get(index).get('stock');
    if ( stock == 0 ) {
      return false;
    }

    var product = products.update('stock', v => v - 1);
    this.products = this.products.update(index, () => { return product; });
  }

  onClear() {
    // Simply reassign our `products` state
    // to `_products` since we created a snapshot
    // of its init state on the class constructor
    this.products = this._products;
  }

  /**
   * Get the product with the given id
   *
   * @param {int} id ID the of the given product
   * @throws Error
   * @return {Object}
   */
  getProductIndex(id) {
    const index = this.products
      .findIndex(product => product.id === id);

    // Throw an error if the product does not exist
    // >> `findIndex` returns -1 when an index was not found
    if ( ~index ) {
      throw new Error(`Product with the id ${id} does not exist`);
    }

    return this.products.get(index);
  }
}

export default alt.createStore(ProductStore);
