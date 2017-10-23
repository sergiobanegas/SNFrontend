import { REQUEST_DASHBOARD, REQUEST_DASHBOARD_SUCCESS, REQUEST_DASHBOARD_ERROR } from '../../types/dashboard';

const initState = {
 posts: [],
 error: null
}
export default (state = initState, action) => {
switch(action.type) {
 case REQUEST_DASHBOARD:
 return {...state, error: action.error};
 case REQUEST_DASHBOARD_SUCCESS:
 return {...state, error: null, posts: action.posts};
 case REQUEST_DASHBOARD_ERROR:
 return {...state, error: action.error};
 default :
 return state
 }
}
