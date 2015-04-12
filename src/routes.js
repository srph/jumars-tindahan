import React from 'react';
import { DefaultRoute, Route } from 'react-router';

import App from './components/App';
import Product from './components/Product/Product';

export default (
  <Route name="app" handler={App} path="/">
    <DefaultRoute handler={Product} category="all" />
    <Route name="drinks" handler={Product} path="/drinks" category="drinks" />
    <Route name="chichirya" handler={Product} path="/chichirya" category="chichirya" />
  </Route>
);
