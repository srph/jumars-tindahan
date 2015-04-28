import React from 'react';
import CartStore from '../../stores/CartStore';
import CartListEmpty from './CartListEmpty';
import CartItem from './CartItem';

export default React.createClass({
  render() {
    var { data } = this.props;

    return (
      !!data.size ? <div className="list"> {data.map((product, i) => {
        return <CartItem data={product} key={i} />
      })} </div>: <CartListEmpty />
    );
  }
});
