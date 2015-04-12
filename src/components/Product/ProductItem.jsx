import React from 'react';
import CartActions from '../../actions/CartActions';

export default React.createClass({
  render() {
    var { data } = this.props;
    return (
      <div className="item">
        <div className="body">
          {data.get('name')}
          <button onClick={CartActions.add.bind(null, data.get('id'))}>
            Buy!
          </button>
        </div>
      </div>
    );
  }
})
