import React from 'react'
import CartActions from '../../actions/CartActions';

export default React.createClass({
  render() {
    var { stock, id } = this.props;

    return (
      <button onClick={CartActions.add.bind(null, id)} disabled={!stock}>
        { stock ? 'Buy!' : 'Sold out' }
      </button>
    );
  }
});
