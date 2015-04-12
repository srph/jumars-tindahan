import React from 'react';
import CartStore from '../../stores/CartStore';
import CartListEmpty from './CartListEmpty';
import CartItem from './CartItem';

export default React.createClass({
  render() {
    var { data } = this.props;
    return (
      <div>
        {!!data.size ? data.map((product) => {
          return <CartItem data={product} />
        }) : <CartListEmpty />}
      </div>
    )
  }
})
