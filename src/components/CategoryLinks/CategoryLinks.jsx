import React from 'react';
import { Link } from 'react-router';
export default React.createClass({
  render() {
    return (
      <div className="category-links">
        <Link to="app" className="link -all">All</Link>
        <Link to="chichirya" className="link -chichirya">Chichirya</Link>
        <Link to="drinks" className="link -drinks">Drinks</Link>
      </div>
    )
  }
})
