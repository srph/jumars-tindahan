import Immutable from 'immutable';
import alt from '../alt';
import data from '../data';
import CartActions from '../actions/CartActions';
import CartStore from './CartStore';

// Initial state of product so we can reuse it,
// when the CartActions dispatches `clear`
const initial = Immutable.fromJS(data);
console.log(initial.get(12));
// A snapshot of the product each time it is checked out.
// The snapshot allows us to restore to the data after
// a checkout when the cart is cleared.
var snapshot;

class ProductStore {
  constructor() {
    this.products = initial;
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
    this.products = snapshot !== undefined
      ? snapshot
      : initial;
  }

  onCheckout() {
    // Save the snapshot of the current product
    // for later usage (to be used to restore)
    // when cleared
    snapshot = this.products;

    // We're not updating anything.
    return false;
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
