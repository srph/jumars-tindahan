import React from 'react';
import AltContainer from 'alt/components/AltContainer';
import CartButtons from './CartButtons';
import CartStore from '../../stores/CartStore';
import CartList from './CartList';

export default React.createClass({
  render() {
    return (
      <AltContainer
        store={CartStore}
        render={(props) => {
          return (
            <div className="cart">
              <div className="box">
                <CartList data={props.cart} />
              </div>

              <CartButtons data={props.cart} />
            </div>
          );
        }} />
    );
  }
})
