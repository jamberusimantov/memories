import * as actionTypes from '../actions/login';
const { LOGIN_USER, LOGIN_USER_USE_TOKEN, GET_USER, SIGNUP_USER,AUTH_USER_TOKEN } = actionTypes;
const reducer = (userData = {}, action: any) => {
    switch (action.type) {
        case LOGIN_USER: return action.payload;
        // case SIGNUP_USER: return action.payload;
        // case AUTH_USER_TOKEN: return action.payload;
        case GET_USER: return action.payload;
        case LOGIN_USER_USE_TOKEN: return action.payload;
        default: return userData;
    }
}
export default reducer; 