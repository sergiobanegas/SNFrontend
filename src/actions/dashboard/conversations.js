import { REQUEST_USER_CONVERSATIONS, REQUEST_USER_CONVERSATIONS_SUCCESS, REQUEST_USER_CONVERSATIONS_ERROR, TOGGLE_CONVERSATIONS } from '../../types/dashboard';
import { URI_CONVERSATIONS } from '../../config';
import { get } from '../../services/http';

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
