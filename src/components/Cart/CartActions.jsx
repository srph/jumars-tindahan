import React from 'react';

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
