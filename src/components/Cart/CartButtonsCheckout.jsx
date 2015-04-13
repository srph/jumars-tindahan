import React from 'react';
import CartActions from '../../actions/CartActions';

export default React.createClass({
  render() {
    return (
      <button type="button" className="checkout-btn" onClick={CartActions.checkout.bind(null)}>
        Checkout
      </button>
    )
  }
})
