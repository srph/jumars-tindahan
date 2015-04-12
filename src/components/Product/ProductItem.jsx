import React from 'react';

export default React.createClass({
  render() {
    return (
      <div className="item">
        <div className="body">
          {this.props.data}
        </div>
      </div>
    );
  }
})
