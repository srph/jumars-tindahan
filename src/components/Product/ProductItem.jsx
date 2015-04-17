import React from 'react';
import ProductItemBuyButton from './ProductItemBuyButton';

export default React.createClass({
  render() {
    var { data } = this.props;
    var id = data.get('id');
    var name = data.get('name');
    var stock = data.get('stock');
    var img = data.get('img');
    var price = data.get('price');
    var remaining = data.get('stock') ? ' remaining' : '';
    
    return (
      <div className="item">
        <div className="body">
          <div className="thumbnail"> <img src={`assets/img/${img}`} /> </div>
          <h3>{name} ({stock}{remaining})</h3>
          <h5>{price}</h5>
          <ProductItemBuyButton stock={!!stock} id={id} />
        </div>
      </div>
    );
  }
})
