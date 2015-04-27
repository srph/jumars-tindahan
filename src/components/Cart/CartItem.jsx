import React from 'react';

export default React.createClass({
  render() {
    var { data } = this.props;
    var name = data.get('name');
    var qty = data.get('quantity');

    return (
      <h5>
        {name} <small>({qty} {qty > 1 ? 'pcs' : 'pc'})</small>
        <CartItemOptions id={data.get('id')} />
      </h5>
    )
  }
})
