import React from 'react';
import AltContainer from 'alt/components/AltContainer';
import ProductStore from '../../stores/ProductStore';

import ProductHeader from './ProductHeader'
import ProductList from './ProductList';

export default React.createClass({
  // Reference to react-router
  // this.context.router
  contextTypes: {
    router: React.PropTypes.func
  },

  render() {
    var { router } = this.context;
    var path = router.getCurrentPath();
    var filter = path == '/' ? 'all' : path.slice(1, path.length);

    return (
      <div className="product">
        <ProductHeader filter={filter} />
        <AltContainer
          store={ProductStore}
          render={(props) => {
            return <ProductList data={props.products} filter={filter} />
          }} />
      </div>
    );
  }
})
