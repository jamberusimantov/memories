import { combineReducers } from 'redux';
import posts from './post.reducers'
import user from './login.reducers'
import form from './form.reducers'

export default combineReducers({
    posts,
    user,
    form,
});