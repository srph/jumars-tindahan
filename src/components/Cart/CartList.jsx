import React from 'react';
import CartStore from '../../stores/CartStore';

export default React.createClass({
  render() {
    return (
      <div>
        <AltContainer
          store={CartStore}
          render={(props) => {
            return props.cart.map(product => <CartItem data={props} />);
          }} />
      </div>
    )
  }
})
