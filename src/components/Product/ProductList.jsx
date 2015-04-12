import React from 'react';
import ProductItem from './ProductItem';

export default React.createClass({
  render() {
    var { filter, data } = this.props;

    return (
      <div className="list">
        { data
          .filter((product) => {
            return filter !== 'all' ? product.get('category') == filter : true
          })
          .map((product, i) => {
            return <ProductItem data={product} key={i} />
          })
        }
      </div>
    );
  }
})
