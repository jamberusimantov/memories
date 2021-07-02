import * as actionTypes from '../actions/login.actions';
const { LOGIN_USER, LOGIN_USER_USE_TOKEN, SIGNUP_USER } = actionTypes;
const reducer = (userData = {}, action: any) => {
    switch (action.type) {
        case LOGIN_USER: return action.payload;
        case SIGNUP_USER: return action.payload;
        case LOGIN_USER_USE_TOKEN: return action.payload;
        default: return userData;
    }
}
export default reducer;