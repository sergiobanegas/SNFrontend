import { USER_TOKEN} from '../config';

export const getUserToken = function(){
  return localStorage.getItem(USER_TOKEN);
}

export const setUserToken = function(token){
  return localStorage.setItem(USER_TOKEN, token);
}

export const existsUserToken = function(){
  return localStorage.getItem(USER_TOKEN) != null;
}
