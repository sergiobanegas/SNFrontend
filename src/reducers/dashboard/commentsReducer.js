import { TOGGLE_POST_COMMENTS, GET_POST_COMMENTS_SUCCESS, GET_POST_COMMENTS_ERROR, TOGGLE_COMMENT_REPLIES,
GET_COMMENT_REPLIES_SUCCESS, GET_COMMENT_REPLIES_ERROR, NEW_COMMENT_SUCCESS, SHOW_NEW_COMMENT_FORM, SET_NEW_COMMENT_CONTENT, COMMENT_UPDATED } from '../../types/dashboard';

const initState = {
  activePostsIds: [],
  activeCommentsIds: [],
  activeNewCommentParentId: null,
  isNewCommentFormIncomplete: true,
  comments: {},
  errorComments: null,
  newCommentContent: undefined,
  newCommentFormShouldUpdate: false
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
  case SET_NEW_COMMENT_CONTENT:
    return {...state, newCommentContent: action.content, isNewCommentFormIncomplete: action.content === ""};
  case NEW_COMMENT_SUCCESS: {
    let comments = state[action.parentId] ? state[action.parentId].slice() : [];
    comments.push(action.comment);
    let index = state.activeCommentsIds.indexOf(action.parentId);
    let activeComments = index === -1
      ? [...state.activeCommentsIds.slice(), action.parentId]
      : state.activeCommentsIds.slice();
    return Object.assign({}, state, {[action.parentId]: comments, activeCommentsIds: activeComments, newCommentContent: undefined, isNewCommentFormIncomplete: true, newCommentFormShouldUpdate: true});
  }
  case COMMENT_UPDATED: {
    return Object.assign({}, state, {newCommentFormShouldUpdate: false});
  }
  default:
    return state
  }
}
