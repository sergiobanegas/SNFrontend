import { USER_TOKEN } from '../config';

export const getUserToken = () => {
	return localStorage.getItem(USER_TOKEN);
}

export const setUserToken = token => {
	return localStorage.setItem(USER_TOKEN, token);
}

export const existsUserToken = () => {
	return localStorage.getItem(USER_TOKEN) != null;
}

export const removeUserToken = () => {
	localStorage.removeItem(USER_TOKEN);
}
