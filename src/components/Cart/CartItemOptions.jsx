import React from 'react';
import CartItemOptionsRemoveButton from './CartItemOptionsRemoveButton';
import CartItemOptionsDecreaseButton from './CartItemOptionsDecreaseButton';

export default React.createClass({
  propTypes: {
    id: React.PropTypes.number.isRequired
  },

  render() {
    var { id } = this.props;
    
    return (
      <span className="options">
        <CartItemOptionsDecreaseButton id={id} />
        <CartItemOptionsRemoveButton id={id} />
      </span>
    );
  }
});
