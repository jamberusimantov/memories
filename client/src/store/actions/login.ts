import * as api from '../../api';
import browserStorage from '../../utils/browserStorage.utils'

export const GET_USER = 'GET_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const SIGNUP_USER = 'SIGNUP_USER';
export const AUTH_USER_TOKEN = 'AUTH_USER_TOKEN';

export const signUpUser = (post: any) => async (dispatch: any) => {
    try {
        const res = await api.signUpUser(post)
        if (res.success) return dispatch({ type: SIGNUP_USER, payload: res.data });
        console.log(res);
    } catch (error) {
        console.error(error.message)
    } finally { }
}

export const loginUser = (post: any) => async (dispatch: any) => {
    try {
        const res = await api.loginUser(post)
        if (res.success) {
            browserStorage.setTokenLocal(res.data.token);
            const res_user = await api.getUser()
            if (res_user.success) return dispatch({ type: LOGIN_USER, payload: res_user.data });
            console.log(res_user);
        }
        console.log(res);
    } catch (error) {
        console.error(error.message)
    } finally { }
}

export const getUser = (isLogin = false) => async (dispatch: any) => {
    try {
        const res = await api.getUser()
        if (res.success) {
            return dispatch({ type: isLogin ? LOGIN_USER : GET_USER, payload: res.data });
        }
        console.log(res);
    } catch (error) {
        console.error(error.message)
    } finally { }
}