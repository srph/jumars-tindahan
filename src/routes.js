import React from 'react';
import { DefaulRoute, Route } from 'react-router';

import App from './App';
import ProductList from './components/ProductList';

export default (
  <Route name="app" handler={App} path="/">
    <DefaultRoute name="home" handler={ProductList} category="all" />
    <Route name="drinks" handler={ProductList} category="drinks" />
    <Route name="chichirya" handler={ProductList} category="chichirya" />
  </Route>
);
