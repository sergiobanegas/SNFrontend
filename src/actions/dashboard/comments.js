import { 
  TOGGLE_POST_COMMENTS, GET_POST_COMMENTS_SUCCESS, GET_POST_COMMENTS_ERROR,
  TOGGLE_COMMENT_REPLIES, GET_COMMENT_REPLIES_SUCCESS, GET_COMMENT_REPLIES_ERROR,
  LIKE_SUCCESS, LIKE_ERROR} from '../../types/dashboard';
import { URI_POSTS, URI_COMMENTS, URI_LIKE } from '../../config';
import { get, post } from '../../services/http';

export const togglePostComments = postId => {
  return (dispatch, getState) => {
    dispatch({type: TOGGLE_POST_COMMENTS, postId: postId});
    get(`${URI_POSTS}/${postId}`, null, null).then(response => {
      dispatch({type: GET_POST_COMMENTS_SUCCESS, comments: response.comments, postId: postId});
    }).catch(error => {
      dispatch({type: GET_POST_COMMENTS_ERROR, error: error.message});
    });
  }
}

export const toggleCommentReplies = commentId => {
  return (dispatch, getState) => {
    dispatch({type: TOGGLE_COMMENT_REPLIES, commentId: commentId});
    get(`${URI_COMMENTS}/${commentId}`, null, null).then(response => {
      dispatch({type: GET_COMMENT_REPLIES_SUCCESS, replies: response.replies, commentId: commentId});
    }).catch(error => {
      dispatch({type: GET_COMMENT_REPLIES_ERROR, error: error.message});
    });
  }
}

export const likeComment = commentId => {
  return (dispatch, getState) => {
     post(`${URI_COMMENTS}/${commentId}/${URI_LIKE}`, null, null).then(response => {
      dispatch({type: LIKE_SUCCESS, id: commentId, likes: response});
    }).catch(error => {
      dispatch({type: LIKE_ERROR, error: error.message});
    });
  }
}