import React from 'react';
import CartActions from '../../actions/CartActions';

export default React.createClass({
  render() {
    return (
      <button type="button" className="btn -checkout" onClick={CartActions.checkout.bind(null)}>
        Checkout
      </button>
    )
  }
});
