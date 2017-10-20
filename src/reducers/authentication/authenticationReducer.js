import { LOCATION_CHANGE } from 'react-router-redux'
import { LOGIN_ERROR, LOGIN_SUCCESS, REGISTER_ERROR, REGISTER_SUCCESS, LOGOUT } from '../../types/authentication';

const initState = {
 message: "",
 error: null,
 logged: localStorage.getItem("user_token") != null
}
export default (state = initState, action) => {
switch(action.type) {
 case LOGIN_ERROR:
 return {...state, error: action.error, logged: false};
 case LOGIN_SUCCESS:
 return {...state, error: null, logged: true};
 case REGISTER_ERROR:
 return {...state, error: action.error, logged: false};
 case REGISTER_SUCCESS:
 return {...state, error: null, logged: true};
 case LOGOUT:
 return {...state, error: null, logged: false};
 case LOCATION_CHANGE: {
   return initState;
 }
 default :
 return state
 }
}
