import React from 'react';

export default React.createClass({
  render() {
    var { data } = this.props;
    return (
      <div>
        {data.get('name')} ({data.get('quantity')})
      </div>
    )
  }
})
