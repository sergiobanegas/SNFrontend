import { createStore, combineReducers, applyMiddleware } from 'redux';
import authenticationReducer from './reducers/authentication/authenticationReducer';
import dashboardReducer from './reducers/dashboard/dashboardReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { reducer as form } from 'redux-form';
import { routerReducer, routerMiddleware } from 'react-router-redux';

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
