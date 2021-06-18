import * as api from '../../api';
import browserStorage from '../../utils/browserStorage.utils'

export const LOGIN_USER = 'LOGIN_USER';
export const SIGNUP_USER = 'SIGNUP_USER';
export const AUTH_USER_TOKEN = 'AUTH_USER_TOKEN';

export const signUpUser = (post: any) => async (dispatch: any) => {
    try {
        const { data } = await api.signUpUser(post)
        if (data.success) return dispatch({ type: SIGNUP_USER, payload: data.data });
        console.log(data);
    } catch (error) {
        console.error(error.message)
    } finally { }
}

export const loginUser = (post: any,done: () => void) => async (dispatch: any) => {
    try {
        const { data } = await api.loginUser(post)
        if (data.success) {
            browserStorage.setTokenLocal(data.data.token)
            getUser(done)
            return dispatch({ type: LOGIN_USER, payload: data.data });
        }
        console.log(data);
    } catch (error) {
        console.error(error.message)
    } finally { }
}

export const getUser = (done: () => void) => async (dispatch: any) => {
    try {
        const { data } = await api.getUser()
        if (data.success) {
            done()
            return dispatch({ type: AUTH_USER_TOKEN, payload: data.data });
        }
        console.log(data);
    } catch (error) {
        console.error(error.message)
    } finally { }
}