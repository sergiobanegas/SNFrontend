import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import commentsReducer from './commentsReducer';
import conversationsReducer from './conversationsReducer';
import likesReducer from './likesReducer';

export default combineReducers({
   postsReducer,
   commentsReducer,
   conversationsReducer,
   likesReducer
});