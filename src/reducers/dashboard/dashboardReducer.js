import { REQUEST_DASHBOARD, REQUEST_DASHBOARD_SUCCESS, REQUEST_DASHBOARD_ERROR,
  REQUEST_USER_CONVERSATIONS, REQUEST_USER_CONVERSATIONS_SUCCESS,
  REQUEST_USER_CONVERSATIONS_ERROR, TOGGLE_CONVERSATIONS,
  TOGGLE_POST_COMMENTS, GET_POST_COMMENTS_SUCCESS, GET_POST_COMMENTS_ERROR,
  TOGGLE_COMMENT_REPLIES, GET_COMMENT_REPLIES_SUCCESS, GET_COMMENT_REPLIES_ERROR } from '../../types/dashboard';

var HashMap = require('hashmap');

const initState = {
 posts: [],
 conversations: [],
 errorPosts: null,
 errorConversations: null,
 conversationsVisible: false,
 activePostsIds: [],
 activeCommentsIds: [],
 comments: new HashMap(),
 errorComments: null,
 replies: new HashMap(),
 errorReplies: null
}
export default (state = initState, action) => {
switch(action.type) {
 case REQUEST_DASHBOARD:
 return {...state, errorPosts: action.error};
 case REQUEST_DASHBOARD_SUCCESS:
 return {...state, errorPosts: null, posts: action.posts};
 case REQUEST_DASHBOARD_ERROR:
 return {...state, errorPosts: action.error};
 case REQUEST_USER_CONVERSATIONS:
 return {...state, errorPosts: action.error};
 case REQUEST_USER_CONVERSATIONS_SUCCESS:
 return {...state, errorConversations: null, conversations: action.conversations};
 case REQUEST_USER_CONVERSATIONS_ERROR:
 return {...state, errorConversations: action.error};
 case TOGGLE_CONVERSATIONS:
 return {...state, conversationsVisible: !state.conversationsVisible};
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
  let newComments = new HashMap(state.comments);
  newComments.set(action.postId, action.comments);
  debugger;
  return {...state, comments: newComments, errorComments: false};
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
 let replies = new HashMap(state.replies);
 replies.set(action.commentId, action.replies);
 return {...state, replies: replies, errorReplies: false};
 case GET_COMMENT_REPLIES_ERROR:
 return {...state, errorComments: true};
 default :
 return state
 }
}
