import alt from '../alt';
import ProductStore from './ProductStore';
import CartActions from '../actions/CartActions';

// Initial funds, used for initial assignment.
// Used to resture funds on clear if `remaining`
// is still undefined
const initial = 1571.69;
// Remaining funds on last checkout. Saved on checkout,
// and also restored on clear (if it's, at least, defined or assigned).
var remaining;

class FundStore {
  constructor() {
    this.funds = initial;
    this.bindActions(CartActions);
  }

  onAdd(id) {
    // If the price does not outweigh the cost, we'll proceed,
    // and deduct the newly aded item to the number of funds.
    // Otherwise, don't trigger any bullshit.
    try {
      const index = ProductStore.getProductIndex(id);
      var product = ProductStore.getState().products.get(index);
    } catch(e) {
      return false;
    }

    var diff = this.funds - product.get('price');
    var stock = product.get('stock');

    if ( diff < 0 || stock == 0 ) {
      return false;
    }

    this.funds = diff;
  }

  onRemove(id) {
    // Increase the funds
    const index = ProductStore.getProductIndex(id);
    var product = ProductStore.getState().products.get(index);
    
    this.funds = this.funds + product.get('price');
  }

  onClear() {
    // When the user wants to clear, we'd set it
    // to the remaining funds (which is set when
    // the cart is checked out). Otherwise, to the
    // initial.
    this.funds = remaining !== undefined
      ? remaining
      : initial;
  }

  onCheckout() {
    remaining = this.funds;
    return false;
  }
}

export default alt.createStore(FundStore);
