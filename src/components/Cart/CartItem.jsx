import React from 'react';

export default React.createClass({
  render() {
    var { data } = this.props;
    var name = data.get('name');
    var qty = data.get('quantity');
    var qtyPrefix = qty > 1 ? 'pcs' : 'pc';

    return (
      <h5>
        {name} <small>({qty} {qtyPrefix})</small>
      </h5>
    )
  }
})
