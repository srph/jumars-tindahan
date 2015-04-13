import React from 'react';
import CartActions from '../../actions/CartActions';

export default React.createClass({
  render() {
    return (
      <button type="button" className="btn -clear" onClick={CartActions.clear.bind(null)}>
        Clear
      </button>
    )
  }
})
