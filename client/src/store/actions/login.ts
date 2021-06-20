import * as api from '../../api';
import browserStorage from '../../utils/browserStorage.utils'

export const GET_USER = 'GET_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_USER_USE_TOKEN = 'LOGIN_USER_USE_TOKEN';
export const SIGNUP_USER = 'SIGNUP_USER';
export const AUTH_USER_TOKEN = 'AUTH_USER_TOKEN';

export const signUpUser = (post: any) => async (dispatch: any) => {
    try {
        const res = await api.signUpUser(post)
        if (res.success) return dispatch({ type: SIGNUP_USER, payload: res.data });
        console.log(res);
    } catch (error) {
        console.error(error)
    } finally { }
}

export const loginUser = (post: any) => async (dispatch: any) => {
    try {
        const res = await api.loginUser(post)
        if (res.success) {
            browserStorage.setTokenLocal(res.data.token);
            return dispatch({ type: LOGIN_USER, payload: res.data });
        }
        console.log(res);
    } catch (error) {
        console.error(error)
    } finally { }
}

export const getUser = (isLogin = false) => async (dispatch: any) => {
    try {
        const res = await api.getUser()
        if (res.success) {
            return dispatch({ type: isLogin ? LOGIN_USER_USE_TOKEN : GET_USER, payload: res.data });
        }
        console.log(res);
    } catch (error) {
        console.error(error)
    } finally { }
}