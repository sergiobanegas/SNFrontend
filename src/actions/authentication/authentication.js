import { push } from 'react-router-redux';
import { LOGIN_ERROR } from '../../types/authentication';
import { LOGIN_SUCCESS } from '../../types/authentication';
import { REGISTER_ERROR } from '../../types/authentication';
import { REGISTER_SUCCESS } from '../../types/authentication';
import { LOGOUT } from '../../types/authentication';
import { URI_LOGIN, URI_SIGNUP } from '../../config';
import { post } from '../../services/http';

export const login = (email, password) => {
  return dispatch => {
    post(URI_LOGIN, {email: email, password: password}, null).then(response => {
      localStorage.setItem('user_token', response.data.token);
      dispatch({type: LOGIN_SUCCESS});
      dispatch(push('/'));
    }).catch(error => {
      dispatch({type: LOGIN_ERROR});
    });
  }
}

export const logout = () => {
  return (dispatch, getState) => {
    localStorage.removeItem('user_token');
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
      localStorage.setItem('user_token', response.data.token);
      dispatch({type: REGISTER_SUCCESS});
      dispatch(push('/'));
    }).catch(error => {
      dispatch({type: REGISTER_ERROR});
    });
  }

}
