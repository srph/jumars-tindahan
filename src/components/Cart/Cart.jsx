import React from 'react';
import CartActions from './CartActions';
import CartList from './CartList';

export default React.createClass({
  render() {
    return (
      <div className="cart">
        <div className="box">
          <CartList />
        </div>
      </div>
    );
  }
})
