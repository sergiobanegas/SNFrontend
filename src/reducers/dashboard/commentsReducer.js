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
 case TOGGLE_POST_COMMENTS:
  let activePostsIds = state.activePostsIds.slice();
  let index = activePostsIds.indexOf(action.postId);
  if (index > -1) {
      if (index === activePostsIds.length -1) {
        activePostsIds.splice(index, 1);
      } else {
        activePostsIds.splice(index, activePostsIds.length -1);
      }
  } else {
    activePostsIds.push(action.postId);
  }
  return {...state, activePostsIds: activePostsIds};
 case GET_POST_COMMENTS_SUCCESS:
  return Object.assign({}, state, {[action.postId]: action.comments, errorComments: false});
 case GET_POST_COMMENTS_ERROR:
 return {...state, errorComments: true};
 case TOGGLE_COMMENT_REPLIES:
   let activeComments = state.activeCommentsIds.slice();
   let commentIndex = activeComments.indexOf(action.commentId);
   if (commentIndex > -1) {
       if (commentIndex === activeComments.length -1) {
         activeComments.splice(commentIndex, 1);
       } else {
         activeComments.splice(commentIndex, activeComments.length -1);
       }
   } else {
     activeComments.push(action.commentId);
   }
   return {...state, activeCommentsIds: activeComments};
  case GET_COMMENT_REPLIES_SUCCESS:
  return Object.assign({}, state, {[action.commentId]: action.replies, errorComments: false});
 case GET_COMMENT_REPLIES_ERROR:
 return {...state, errorComments: true};
 case SHOW_NEW_COMMENT_FORM:
 return Object.assign({}, state, {activeNewCommentParentId: action.id});
 case NEW_COMMENT_SUCCESS:
 let parentId = action.comment.parent ? action.comment.parent : action.comment.post_id;
 return Object.assign({}, state, {[action.parentId]: action.comment.parent || parentId});
 default:
 return state
 }
}
