import React from 'react';
import AltContainer from 'alt/components/AltContainer';
import FundStore from '../../stores/FundStore'
import CartStore from '../../stores/CartStore';
import CartButtons from './CartButtons';
import CartList from './CartList';

export default React.createClass({
  render() {
    return (
      <AltContainer
        stores={{
          CartStore: CartStore,
          FundStore: FundStore
        }}
        render={(props) => {
          var cart = props.CartStore.cart;
          var funds = props.FundStore.funds;

          return (
            <div className="cart">
              <div className="box">
                Funds: {funds.toFixed(2)}
                <CartList data={cart} />
              </div>

              <CartButtons data={cart} />
            </div>
          );
        }} />
    );
  }
})
