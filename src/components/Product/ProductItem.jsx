import React from 'react';
import ProductItemBuyButton from './ProductItemBuyButton';

export default React.createClass({
  render() {
    var { data } = this.props;
    var id = data.get('id');
    var stock = data.get('stock');
    var img = data.get('img');
    return (
      <div className="item">
        <div className="body">
          <div className="thumbnail"> <img src={`assets/img/${img}`} /> </div>
          <span>{data.get('name')} ({stock})</span>
          <ProductItemBuyButton stock={!!stock} id={id} />
        </div>
      </div>
    );
  }
})
