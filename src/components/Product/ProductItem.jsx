import React from 'react';
import ProductItemBuyButton from './ProductItemBuyButton';

export default React.createClass({
  render() {
    var { data } = this.props;
    var id = data.get('id');
    var stock = data.get('stock');
    return (
      <div className="item">
        <div className="body">
          {data.get('name')} ({stock})
          <ProductItemBuyButton stock={!!stock} id={id} />
        </div>
      </div>
    );
  }
})
