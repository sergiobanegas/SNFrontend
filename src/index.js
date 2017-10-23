import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRoutes from './routes';
import { ConnectedRouter } from 'react-router-redux';
import store from './store';
import createBrowserHistory from 'history/createBrowserHistory';
import 'semantic-ui-css/semantic.min.css';

var history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store(history)}>
    <ConnectedRouter history={history}>
      <AppRoutes />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
)
