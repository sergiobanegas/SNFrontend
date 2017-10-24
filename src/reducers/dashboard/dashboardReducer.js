import { REQUEST_DASHBOARD, REQUEST_DASHBOARD_SUCCESS, REQUEST_DASHBOARD_ERROR,
  REQUEST_USER_CONVERSATIONS, REQUEST_USER_CONVERSATIONS_SUCCESS,
  REQUEST_USER_CONVERSATIONS_ERROR, TOGGLE_CONVERSATIONS,
  TOGGLE_POST_COMMENTS, GET_POST_COMMENTS_SUCCESS, GET_POST_COMMENTS_ERROR } from '../../types/dashboard';

const initState = {
 posts: [],
 conversations: [],
 errorPosts: null,
 errorConversations: null,
 conversationsVisible: false,
 indexOfPostWithCommentsVisible: -1,
 comments: [],
 errorComments: null
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
 return {...state, indexOfPostWithCommentsVisible: action.index};
 case GET_POST_COMMENTS_SUCCESS:
 return {...state, comments: action.comments, errorComments: false};
 case GET_POST_COMMENTS_ERROR:
 return {...state, errorComments: true};
 default :
 return state
 }
}
