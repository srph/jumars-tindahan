import React from 'react';
import CartStore from '../../stores/CartStore';
import CartItem from './CartItem';

export default React.createClass({
  render() {
    return (
      <div>
        {this.props.data.map((product) => {
          return <CartItem data={product} />
        })}
      </div>
    )
  }
})
