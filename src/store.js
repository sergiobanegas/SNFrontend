import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { reducer as form } from 'redux-form';
import { routerReducer, routerMiddleware } from 'react-router-redux';

import authenticationReducer from './reducers/authentication';
import dashboardReducer from './reducers/dashboard';

let store = function(history) {
  const reducer = combineReducers({
   authenticationReducer,
   dashboardReducer,
   form,
   router: routerReducer
  });

  var middleware = [thunk, logger, routerMiddleware(history)];

  return createStore(
   reducer,
   applyMiddleware(...middleware)
  )

}
export default store;
