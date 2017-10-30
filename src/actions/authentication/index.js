import { push } from 'react-router-redux';
import { SIGN_IN_SUCCESS, SIGN_IN_ERROR, SIGN_UP_SUCCESS, SIGN_UP_ERROR, LOGOUT } from '../../types/authentication';
import { URI_SIGN_IN, URI_SIGN_UP } from '../../config';
import { post } from '../../services/http';
import { setUserToken, removeUserToken } from '../../services/storage';

export const signIn = (email, password) => {
  return dispatch => {
    post(URI_SIGN_IN, {email: email, password: password}, null).then(response => {
      setUserToken(response.token);
      dispatch({type: SIGN_IN_SUCCESS});
      dispatch(push('/'));
    }).catch(error => {
      dispatch({type: SIGN_IN_ERROR, error: error.message});
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

export const signUp = (values) => {
  return dispatch => {
    post(URI_SIGN_UP, {
      email: values.email,
      password: values.password,
      name: values.name,
      gender: values.gender
    }, null).then(response => {
      setUserToken(response.token);
      dispatch({type: SIGN_UP_SUCCESS});
      dispatch(push('/'));
    }).catch(error => {
      dispatch({type: SIGN_UP_ERROR, error: error.message});
    });
  }
}
