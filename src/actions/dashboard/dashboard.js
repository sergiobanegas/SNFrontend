import { REQUEST_DASHBOARD, REQUEST_DASHBOARD_SUCCESS, REQUEST_DASHBOARD_ERROR,
  REQUEST_USER_CONVERSATIONS, REQUEST_USER_CONVERSATIONS_SUCCESS,
  REQUEST_USER_CONVERSATIONS_ERROR, TOGGLE_CONVERSATIONS,
  TOGGLE_POST_COMMENTS, GET_POST_COMMENTS_SUCCESS, GET_POST_COMMENTS_ERROR } from '../../types/dashboard';
import { URI_POSTS, URI_CONVERSATIONS } from '../../config';
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

export const getUserConversations = () => {
  return dispatch => {
    dispatch({type: REQUEST_USER_CONVERSATIONS});
    get(URI_CONVERSATIONS, null, null).then(response => {
      dispatch({type: REQUEST_USER_CONVERSATIONS_SUCCESS, conversations: response});
    }).catch(error => {
      dispatch({type: REQUEST_USER_CONVERSATIONS_ERROR, error: error.message});
    });
  }
}

export const toggleConversations = () => {
  return dispatch => {
    dispatch({type: TOGGLE_CONVERSATIONS});
  }
}

export const togglePostComments = (postId, index) => {
  return dispatch => {
    dispatch({type: TOGGLE_POST_COMMENTS, index: index});
    get(`${URI_POSTS}/${postId}`, null, null).then(response => {
      dispatch({type: GET_POST_COMMENTS_SUCCESS, comments: response.comments});
    }).catch(error => {
      dispatch({type: GET_POST_COMMENTS_ERROR, error: error.message});
    });
  }
}
