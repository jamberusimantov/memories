import * as api from '../../api';
import browserStorage from '../../utils/browserStorage.utils'

export const LOGIN_USER = 'LOGIN_USER';
export const SIGNUP_USER = 'SIGNUP_USER';
export const LOGIN_USER_USE_TOKEN = 'LOGIN_USER_USE_TOKEN';


export const signUpUser = (post: any, message?: (msg: string) => void) => async (dispatch: any) => {
    let msg = 'success sign up'
    try {
        const res = await api.users.signUpUser(post)
        if (res.success) {
            message ? message(msg) : console.log(msg);
            browserStorage.setTokenLocal(res.data.token);
            return dispatch({ type: SIGNUP_USER, payload: res.data });
        }
        msg = 'failure sign up'
        message ? message(msg) : console.warn(res.data);
    } catch (error) {
        msg = 'error sign up'
        message ? message(msg) : console.error(error);
    } finally { }
}
export const loginUser = (post: any, message?: (msg: string) => void) => async (dispatch: any) => {
    let msg = 'success log in'
    try {
        const res = await api.users.loginUser(post)
        if (res.success) {
            let msg = 'success log in'
            message ? message(msg) : console.log(msg);
            browserStorage.setTokenLocal(res.data.token);
            return dispatch({ type: LOGIN_USER, payload: res.data });
        }
        msg = 'failure sign up'
        message ? message(msg) : console.warn(res.data);
    } catch (error) {
        msg = 'error sign up'
        message ? message(msg) : console.error(error);
    } finally { }
}

export const getUser = ( message?: (msg: string) => void) => async (dispatch: any) => {
    let msg = 'success log in using token '
    try {
        const res = await api.users.getUser()
        if (res.success) {
            message ? message(msg) : console.log(msg);
            browserStorage.setTokenLocal(res.data.token);
            return dispatch({ type: LOGIN_USER_USE_TOKEN, payload: res.data });
        }
        msg = 'failure sign up'
        message ? message(msg) : console.warn(res.data);
    } catch (error) {
        msg = 'error sign up'
        message ? message(msg) : console.error(error);
    } finally { }
}