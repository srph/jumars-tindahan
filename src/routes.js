import React from 'react';
import { DefaultRoute, Route } from 'react-router';

import App from './components/App';
import ProductList from './components/ProductList/ProductList';

export default (
  <Route name="app" handler={App} path="/">
    <DefaultRoute name="home" handler={ProductList} category="all" />
    <Route name="drinks" handler={ProductList} path="/drinks" category="drinks" />
    <Route name="chichirya" handler={ProductList} path="/chichirya" category="chichirya" />
  </Route>
);
