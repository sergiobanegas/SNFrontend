import { REQUEST_POSTS, REQUEST_POSTS_SUCCESS, REQUEST_POSTS_ERROR } from '../../types/dashboard';
import { URI_POSTS } from '../../config';
import { get } from '../../services/http';

export const getPosts = () => {
  return dispatch => {
    dispatch({type: REQUEST_POSTS});
    get(URI_POSTS, null, null).then(response => {
      dispatch({type: REQUEST_POSTS_SUCCESS, posts: response});
    }).catch(error => {
      dispatch({type: REQUEST_POSTS_ERROR, error: error.message});
    });
  }
}
