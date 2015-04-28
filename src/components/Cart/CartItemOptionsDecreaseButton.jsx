import React from 'react';
import CartActions from '../../actions/CartActions';

export default React.createClass({
  propTypes: {
    id: React.PropTypes.number.isRequired
  },

  render() {
    return (
      <button type="button" onClick={this._handleClick} className="decrease-btn">
        <i className="glyphicon glyphicon-minus" />
      </button>
    )
  },

  _handleClick(evt) {
    evt.preventDefault();
    CartActions.decrease(this.props.id);
  }
})
