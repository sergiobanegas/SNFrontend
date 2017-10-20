import { LOGIN_ERROR, LOGIN_SUCCESS, REGISTER_ERROR, REGISTER_SUCCESS, LOGOUT } from '../../types/authentication';

const initState = {
 message: "",
 error: false,
 logged: localStorage.getItem("user_token") != null
}
export default (state = initState, action) => {
switch(action.type) {
 case LOGIN_ERROR:
 return {...state, error: true, logged: false};
 case LOGIN_SUCCESS:
 return {...state, error: false, logged: true};
 case REGISTER_ERROR:
 return {...state, error: true, logged: false};
 case REGISTER_SUCCESS:
 return {...state, error: false, logged: true};
 case LOGOUT:
 return {...state, error: false, logged: false}
 default :
 return state
 }
}
