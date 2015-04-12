import React from 'react';
import Router from 'react-router';
import routes from './routes';

Router.run(routes, function(Handler, state) {
  console.log(state);
  React.render(<Handler params={state.params} />, document.body)
});
