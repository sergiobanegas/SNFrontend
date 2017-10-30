import { push } from 'react-router-redux';
import { LOGIN_ERROR, LOGIN_SUCCESS, REGISTER_ERROR, REGISTER_SUCCESS, LOGOUT } from '../../types/authentication';
import { URI_LOGIN, URI_SIGNUP, USER_TOKEN } from '../../config';
import { post } from '../../services/http';
import { setUserToken, removeUserToken } from '../../services/storage';

export const login = (email, password) => {
  return dispatch => {
    post(URI_LOGIN, {email: email, password: password}, null).then(response => {
      setUserToken(response.token);
      dispatch({type: LOGIN_SUCCESS});
      dispatch(push('/'));
    }).catch(error => {
      dispatch({type: LOGIN_ERROR, error: error.message});
    });
  }
}

export const logout = () => {
  return (dispatch, getState) => {
    removeUserToken();
    dispatch({type: LOGOUT});
    dispatch(push('/login'));
  }
}

export const signup = (values) => {
  return dispatch => {
    post(URI_SIGNUP, {
      email: values.email,
      password: values.password,
      name: values.name,
      gender: values.gender
    }, null).then(response => {
      setUserToken(response.token);
      dispatch({type: REGISTER_SUCCESS});
      dispatch(push('/'));
    }).catch(error => {
      dispatch({type: REGISTER_ERROR, error: error.message});
    });
  }

}
