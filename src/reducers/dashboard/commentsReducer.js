import { TOGGLE_POST_COMMENTS, GET_POST_COMMENTS_SUCCESS, GET_POST_COMMENTS_ERROR, TOGGLE_COMMENT_REPLIES,
GET_COMMENT_REPLIES_SUCCESS, GET_COMMENT_REPLIES_ERROR, NEW_COMMENT_SUCCESS, SHOW_NEW_COMMENT_FORM } from '../../types/dashboard';

const initState = {
  activePostsIds: [],
  activeCommentsIds: [],
  activeNewCommentParentId: null,
  comments: {},
  errorComments: null
}
export default (state = initState, action) => {
  switch(action.type) {
   case TOGGLE_POST_COMMENTS: {
    let activePostsIds = state.activePostsIds.slice();
    let index = activePostsIds.indexOf(action.postId);
    if (index > -1) {
      index === activePostsIds.length -1 ? activePostsIds.splice(index, 1) : activePostsIds.splice(index, activePostsIds.length -1);  
    } else {
      activePostsIds.push(action.postId);
    }
    return {...state, activePostsIds: activePostsIds};
  }
  case GET_POST_COMMENTS_SUCCESS:
    return Object.assign({}, state, {[action.postId]: action.comments, errorComments: false});
  case GET_POST_COMMENTS_ERROR:
    return {...state, errorComments: true};
  case TOGGLE_COMMENT_REPLIES: {
    let activeCommentsIds = state.activeCommentsIds.slice();
    let index = activeCommentsIds.indexOf(action.commentId);
    if (index > -1) {
      index === activeCommentsIds.length -1 ? activeCommentsIds.splice(index, 1) : activeCommentsIds.splice(index, activeCommentsIds.length -1);
    } else {
      activeCommentsIds.push(action.commentId);
    }
    return {...state, activeCommentsIds: activeCommentsIds};
  }
  case GET_COMMENT_REPLIES_SUCCESS:
    return Object.assign({}, state, {[action.commentId]: action.replies, errorComments: false});
  case GET_COMMENT_REPLIES_ERROR:
    return {...state, errorComments: true};
  case SHOW_NEW_COMMENT_FORM:
    return Object.assign({}, state, {activeNewCommentParentId: action.id});
  case NEW_COMMENT_SUCCESS: {
    let comments = state[action.parentId] ? state[action.parentId].slice() : [];
    comments.push(action.comment);
    let activeCommentsIds = state.activeCommentsIds.slice();
    let index = activeCommentsIds.indexOf(action.parentId);
    index === -1 && activeCommentsIds.push(action.parentId);
    return Object.assign({}, state, {[action.parentId]: comments, activeCommentsIds: activeCommentsIds});
  }
  default:
    return state
  }
}
