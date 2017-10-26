import { REQUEST_DASHBOARD, REQUEST_DASHBOARD_SUCCESS, REQUEST_DASHBOARD_ERROR,
  REQUEST_USER_CONVERSATIONS, REQUEST_USER_CONVERSATIONS_SUCCESS,
  REQUEST_USER_CONVERSATIONS_ERROR, TOGGLE_CONVERSATIONS,
  TOGGLE_POST_COMMENTS, GET_POST_COMMENTS_SUCCESS, GET_POST_COMMENTS_ERROR,
  TOGGLE_COMMENT_REPLIES, GET_COMMENT_REPLIES_SUCCESS, GET_COMMENT_REPLIES_ERROR } from '../../types/dashboard';
import { URI_POSTS, URI_COMMENTS, URI_CONVERSATIONS } from '../../config';
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

export const togglePostComments = postId => {
  return (dispatch, getState) => {
    let shouldGetComments = getState().dashboardReducer.comments.get(postId) === undefined;
    dispatch({type: TOGGLE_POST_COMMENTS, postId: postId});
    shouldGetComments && get(`${URI_POSTS}/${postId}`, null, null).then(response => {
      dispatch({type: GET_POST_COMMENTS_SUCCESS, comments: response.comments, postId: postId});
    }).catch(error => {
      dispatch({type: GET_POST_COMMENTS_ERROR, error: error.message});
    });
  }
}

export const toggleCommentReplies = commentId => {
  return (dispatch, getState) => {
    dispatch({type: TOGGLE_COMMENT_REPLIES, commentId: commentId});
    let shouldGetReplies = getState().dashboardReducer.replies.get(commentId) === undefined;
    shouldGetReplies && get(`${URI_COMMENTS}/${commentId}`, null, null).then(response => {
      dispatch({type: GET_COMMENT_REPLIES_SUCCESS, replies: response.replies, commentId: commentId});
    }).catch(error => {
      dispatch({type: GET_COMMENT_REPLIES_ERROR, error: error.message});
    });
  }
}
