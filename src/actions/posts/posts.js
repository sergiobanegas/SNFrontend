import { push } from 'react-router-redux';
import { REQUEST_DASHBOARD, REQUEST_DASHBOARD_SUCCESS, REQUEST_DASHBOARD_ERROR } from '../../types/dashboard';
import { LOGOUT } from '../../types/authentication';
import { URI_POSTS } from '../../config';
import { get } from '../../services/http';

export const getDashBoardPosts = () => {
  return dispatch => {
    dispatch({type: REQUEST_DASHBOARD});
    get(URI_POSTS, null, null).then(response => {
      dispatch({type: REQUEST_DASHBOARD_SUCCESS, posts: response});
    }).catch(error => {
      dispatch({type: REQUEST_DASHBOARD_ERROR, error: error.message});
    });
  }
}
