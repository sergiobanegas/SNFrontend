import { REQUEST_POSTS } from '../../types/dashboard';
import { REQUEST_POSTS_SUCCESS } from '../../types/dashboard';
import { REQUEST_POSTS_ERROR } from '../../types/dashboard';
const initState = {
 posts: [],
 errorPosts: null
}
export default (state = initState, action) => {
switch(action.type) {
 case REQUEST_POSTS:
 return {...state, errorPosts: action.error};
 case REQUEST_POSTS_SUCCESS:
 return {...state, errorPosts: null, posts: action.posts};
 case REQUEST_POSTS_ERROR:
 return {...state, errorPosts: action.error};
 default :
 return state
 }
}
