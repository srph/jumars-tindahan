import React from 'react';
import uppercase from 'upper-case-first';

export default React.createClass({
  render() {
    var { filter } = this.props;

    return (
      <h1>
        Products ({`${uppercase(filter)}`})
      </h1>
    );
  }
})
