import alt from '../alt';
import CartActions from '../actions/CartActions';

class CartStore {
  constructor() {
    this.products = [];
    this.bindActions(CartActions);
  }

  onAdd(id) {
    var exists = this._getProduct();

    if ( ~exists ) {
      return false;
    }
  }

  onDecrease(id) {
    try {
      var product = this._getProduct(id);
    } catch(e) {
      return false;
    }

    products[index].quantity--;
  }

  onIncrease(id) {
    try {
      var product = this._getProduct(id);
    } catch(e) {
      return false;
    }

    this.products[index].quantity--;
  }

  onRemove(id) {
    this.products = this.products
      .filter(product => product.id !== id);
  }

  onClear() {
    this.products = [];
  }

  /**
   * Utility to get the product with the provided id
   */
  _getProduct() {
    var products = this.products
      .map(product => product.id)
        .indexOf(id);

    if ( products == undefined ) {
      throw new Error('Product does not exist in the list');
    }

    return products;
  }
}

export default alt.createStore(CartStore);
