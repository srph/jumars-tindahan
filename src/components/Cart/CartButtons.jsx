import React from 'react';
import CartButtonsClear from './CartButtonsClear';
import CartButtonsCheckout from './CartButtonsCheckout';
export default React.createClass({
  render() {
    return (
      <div className="actions">
        <CartButtonsClear />
        <CartButtonsCheckout />
      </div>
    );l
  }
});
