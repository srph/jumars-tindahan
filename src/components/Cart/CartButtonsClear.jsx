import React from 'react';
import CartActions from '../../actions/CartActions';

export default React.createClass({
  render() {
    return (
      <button type="button" className="clear-btn" onClick={CartActions.clear.bind(null)}>
        Clear
      </button>
    )
  }
})
