import React from 'react';
import CartActions from '../../actions/CartActions';

export default React.createClass({
  propTypes: {
    id: React.PropTypes.number.isRequired
  },

  render() {
    return (
      <button type="button" onClick={this.handleClick} className="remove-btn">
        <i className="glyphicon glyphicon-minus" />
      </button>
    )
  },

  _handleClick(evt) {
    evt.preventDefault();
    CartActions.remove(this.props.id);
  }
})
