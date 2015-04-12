import React from 'react';
import AltContainer from 'alt/components/AltContainer';
import ProductStore from '../../stores/ProductStore';

import ProductHeader from './ProductHeader'
import ProductList from './ProductList';

export default React.createClass({
  render() {
    var { params } = this.props;

    return (
      <div className="product">
        <ProductHeader filter={params.category} />

        <AltContainer
          store={ProductStore}
          render={(props) => {
            return <ProductList data={props.products} />
          }} />
      </div>
    );
  }
})
