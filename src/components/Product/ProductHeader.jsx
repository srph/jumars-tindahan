import React from 'react';
import uppercase from 'upper-case-first';

export default React.createClass({
  render() {
    var { filter } = this.props;
    var uppercased = !filter.length
      ? 'All'
      : uppercase(filter);

    return (
      <h1>
        Products ({uppercased})
      </h1>
    );
  }
})
