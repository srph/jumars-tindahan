import React from 'react';

export default React.createClass({
  render() {
    var { filter } = this.props;
    var uppercased = !filter.length
      ? 'All'
      : filter.charAt(0).toUpperCase() + filter.slice(1, filter.length);

    return (
      <h1>
        Products ({uppercased})
      </h1>
    );
  }
})
