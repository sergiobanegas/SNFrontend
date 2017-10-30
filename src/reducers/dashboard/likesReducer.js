import { LIKE_SUCCESS, LIKE_ERROR } from '../../types/dashboard';

const initState = {
 errorLike: false
}
export default (state = initState, action) => {
switch(action.type) {
 case LIKE_SUCCESS:
 return Object.assign({}, state, {[action.id]: action.likes, errorLike: false});
 case LIKE_ERROR:
 return {...state, errorLike: true};
 default:
 return state
 }
}
