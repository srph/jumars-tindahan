import React from 'react';
import Immutable from 'immutable';
import CartButtonsClear from './CartButtonsClear';
import CartButtonsCheckout from './CartButtonsCheckout';

export default React.createClass({
  propTypes: {
    /**
     * Expecting an Immutable List
     */
    data: React.PropTypes.instanceOf(Immutable.List)
  },

  render() {
    return !!this.props.data.size ? (
      <div className="actions">
        <CartButtonsClear />
        <CartButtonsCheckout />
      </div>
    ) : null;
  }
});
