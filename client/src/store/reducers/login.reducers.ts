import * as actionTypes from '../actions/login.actions';
import * as themeActionTypes from '../actions/theme.actions';
// import * as utils from '../../utils';
const { LOGIN_USER, LOGIN_USER_USE_TOKEN, SIGNUP_USER } = actionTypes;
const { SET_USER_THEME } = themeActionTypes;
// const { appUtils: { mockLoginFormData } } = utils.default;
const reducer = (userData = {}, action: any) => {
    switch (action.type) {
        case LOGIN_USER: return action.payload;
        case SIGNUP_USER: return action.payload;
        case LOGIN_USER_USE_TOKEN: return action.payload;
        case SET_USER_THEME: return ({ ...userData, theme: action.payload });
        default: return userData;
    }
}
export default reducer;