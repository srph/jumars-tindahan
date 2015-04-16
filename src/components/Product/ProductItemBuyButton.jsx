import React from 'react'
import CartActions from '../../actions/CartActions';

export default React.createClass({
  render() {
    var { stock, id } = this.props;

    return (
      <div className="buy-btn-container">
        <button className="buy-btn" onClick={CartActions.add.bind(null, id)} disabled={!stock}>
          { stock ? 'Buy!' : 'Sold out' }
        </button>
      </div>
    );
  }
});
