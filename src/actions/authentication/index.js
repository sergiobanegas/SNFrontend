import { push } from 'react-router-redux';
import { SIGN_IN_SUCCESS, SIGN_IN_ERROR, SIGN_UP_SUCCESS, SIGN_UP_ERROR, LOGOUT, SET_AUTH_FORM_FIELD, COMPLETED_FORM, INCOMPLETED_FORM } from '../../types/authentication';
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

export const signUp = (fields) => {
  return dispatch => {
    if (fields.password !== fields.passwordConfirmation) {
      dispatch({type: SIGN_UP_ERROR, error: "Password not matching"});
    } else {
      post(URI_SIGN_UP, {
        email: fields.email,
        password: fields.password,
        name: fields.name,
        gender: fields.gender
      }, null).then(response => {
        setUserToken(response.token);
        dispatch({type: SIGN_UP_SUCCESS});
        dispatch(push('/'));
      }).catch(error => {
        dispatch({type: SIGN_UP_ERROR, error: error.message});
      });
    }
  }
}

export const setSignInFormFieldValue = (field, value) => {
  return (dispatch, getState) => {
    dispatch({type: SET_AUTH_FORM_FIELD, field: field, value: value});
    let reducer = getState().authenticationReducer;
    let completed = reducer["email"] && reducer["password"];
    completed ? dispatch({type: COMPLETED_FORM}) : dispatch({type: INCOMPLETED_FORM});
  }
}

export const setSignUpFormFieldValue = (field, value) => {
  return (dispatch, getState) => {
    dispatch({type: SET_AUTH_FORM_FIELD, field: field, value: value});
    let reducer = getState().authenticationReducer;
    let completed = reducer["email"] && reducer["password"] && reducer["passwordConfirmation"] && reducer["name"] && reducer["gender"];
    completed ? dispatch({type: COMPLETED_FORM}) : dispatch({type: INCOMPLETED_FORM});
  }
}
