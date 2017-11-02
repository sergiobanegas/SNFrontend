import { TOGGLE_POST_COMMENTS, GET_POST_COMMENTS_SUCCESS, GET_POST_COMMENTS_ERROR, TOGGLE_COMMENT_REPLIES, GET_COMMENT_REPLIES_SUCCESS,
  GET_COMMENT_REPLIES_ERROR, LIKE_SUCCESS, LIKE_ERROR, NEW_COMMENT_SUCCESS, NEW_COMMENT_ERROR, SHOW_NEW_COMMENT_FORM, SET_NEW_COMMENT_CONTENT, COMMENT_UPDATED } from '../../types/dashboard';
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
    dispatch(getCommentReplies(commentId));
  }
}

const getCommentReplies = id => {
  return (dispatch, getState) => {
    get(`${URI_COMMENTS}/${id}`, null, null).then(response => {
      dispatch({type: GET_COMMENT_REPLIES_SUCCESS, replies: response.replies, commentId: id});
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

export const newComment = (content, postId, commentId) => {
  return (dispatch, getState) => {
     post(`${URI_COMMENTS}`, {
      content: content,
      post_id: postId,
      parent: commentId
     }, null).then(response => {
      let parentId = commentId !== null ? commentId : postId;
      let shouldFetch = getState().dashboardReducer.commentsReducer.activeCommentsIds.indexOf(parentId) === -1;
      dispatch({type: NEW_COMMENT_SUCCESS, comment: response, parentId: parentId});
      shouldFetch && dispatch(getCommentReplies(parentId));
    }).catch(error => {
      dispatch({type: NEW_COMMENT_ERROR, error: error.message});
    });
  }
}

export const showNewCommentForm = id => {
  return dispatch => {
      dispatch({type: SHOW_NEW_COMMENT_FORM, id: id});
  }
}

export const setNewCommentContent = content => {
  return dispatch => {
      dispatch({type: SET_NEW_COMMENT_CONTENT, content: content});
  }
}

export const updateFormInput = () => {
  return dispatch => {
      dispatch({type: COMMENT_UPDATED});
  }
}
