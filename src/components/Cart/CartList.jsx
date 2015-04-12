import React from 'react';
import CartStore from '../../stores/CartStore';
import CartListEmpty from './CartListEmpty';
import CartItem from './CartItem';

export default React.createClass({
  render() {
    var { data } = this.props;

    return (
      !!data.size ? <div> {data.map((product) => {
        return <CartItem data={product} />
      })} </div>: <CartListEmpty />
    );
  }
})
