import { LOCATION_CHANGE } from 'react-router-redux'
import { SIGN_IN_SUCCESS, SIGN_IN_ERROR, SIGN_UP_SUCCESS, SIGN_UP_ERROR, LOGOUT, SET_AUTH_FORM_FIELD, COMPLETED_FORM, INCOMPLETED_FORM } from '../../types/authentication';

const initState = {
 message: "",
 error: null,
 logged: localStorage.getItem("user_token") != null,
 isIncomplete: true
}
export default (state = initState, action) => {
switch(action.type) {
 case SIGN_IN_SUCCESS:
 return {...state, error: null, logged: true};
 case SIGN_IN_ERROR:
 return {...state, error: action.error, logged: false};
 case SIGN_UP_SUCCESS:
 return {...state, error: null, logged: true};
 case SIGN_UP_ERROR:
 return {...state, error: action.error, logged: false};
 case LOGOUT:
 return {...state, error: null, logged: false};
 case SET_AUTH_FORM_FIELD: {
   let value = action.value.length > 0 ? action.value : undefined;
   return Object.assign({}, state, {[action.field]: value});
 }
 case COMPLETED_FORM:
 return {...state, isIncomplete: false};
 case INCOMPLETED_FORM:
 return {...state, isIncomplete: true};
 case LOCATION_CHANGE: {
   return initState;
 }
 default :
 return state
 }
}
