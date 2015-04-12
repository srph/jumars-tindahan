import React from 'react';
import ProductItem from './ProductItem';

export default React.createClass({
  render() {
    var { data } = this.props;

    return (
      <div className="list">
        { data.map((product, i) => {
          return <ProductItem data={product} key={i} />
        })}
      </div>
    );
  }
})
