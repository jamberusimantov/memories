import { combineReducers } from 'redux';
import posts from './post'
import login from './login'
export default combineReducers({
    posts,
    userData: login,
});