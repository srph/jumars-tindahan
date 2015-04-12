import React from 'react';
import CartActionsClear from './CartActionsClear';
import CartActionsCheckout from './CartActionsCheckout';
export default React.createClass({
  render() {
    return (
      <div className="actions">
        <CartActionsClear />
        <CartActionsCheckout />
      </div>
    );l
  }
});
