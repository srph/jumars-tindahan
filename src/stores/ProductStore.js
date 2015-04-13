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
    this.exportPublicMethods({ getProductIndex: this.getProductIndex.bind(this) });
  }

  onAdd(id) {
    // Let the cart get a stock first ;)
    this.waitFor(CartStore);

    try {
      var index = this.getProductIndex(id);
    } catch(e) {
      return false;
    }
    var product = this.products.get(index);

    // OFC, We won't update anything when
    // the stock is already replenished!
    if ( product.get('stock') == 0 ) {
      return false;
    }

    this.products = this.products.update(index, (product) => {
      return product.update('stock', v => v - 1);
    });
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
      .findIndex(product => product.get('id') === id);

    // Throw an error if the product does not exist
    // >> `findIndex` returns -1 when an index was not found
    if ( index == -1 ) {
      throw new Error(`Product with the id ${id} does not exist`);
    }

    return index;
  }
}

export default alt.createStore(ProductStore);
