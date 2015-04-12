import React from 'react';

export default React.createClass({
  render() {
    var { filter } = this.props;
    // var uppercased = filter.charAt(0).toUpperCase() + filter.slice(1, filter.length);
    var uppercased = '';
    return (
      <h1 className="header">
        Products ({uppercased})
      </h1>
    );
  }
})
