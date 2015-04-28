import React from 'react';
import CartItemOptions from './CartItemOptions';

export default React.createClass({
  render() {
    var { data } = this.props;
    var name = data.get('name');
    var qty = data.get('quantity');

    return (
      <div className="item">
        <h5 className="name">{name} <small>({qty} {qty > 1 ? 'pcs' : 'pc'})</small></h5>
        <CartItemOptions id={data.get('id')} />
      </div>
    )
  }
})
