import { REQUEST_USER_CONVERSATIONS, REQUEST_USER_CONVERSATIONS_SUCCESS,
  REQUEST_USER_CONVERSATIONS_ERROR, TOGGLE_CONVERSATIONS} from '../../types/dashboard';

const initState = {
 conversations: [],
 conversationsVisible: false,
}
export default (state = initState, action) => {
switch(action.type) {
 case REQUEST_USER_CONVERSATIONS:
 return {...state, errorPosts: action.error};
 case REQUEST_USER_CONVERSATIONS_SUCCESS:
 return {...state, errorConversations: null, conversations: action.conversations};
 case REQUEST_USER_CONVERSATIONS_ERROR:
 return {...state, errorConversations: action.error};
 case TOGGLE_CONVERSATIONS:
 return {...state, conversationsVisible: !state.conversationsVisible};
 default :
 return state
 }
}
