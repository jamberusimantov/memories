import * as api from '../../api';

export const GET_ALL = 'GET_ALL';
export const GET_POST = 'GET_POST';
export const POST_POST = 'POST_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const REMOVE_POST = 'REMOVE_POST';

export const getAllPosts = () => async (dispatch: any) => {
    try {
        const res = await api.getAllPosts()
        if (res.success) return dispatch({ type: GET_ALL, payload: res.data });
        console.log(res);
    } catch (error) {
        console.error(error.message)
    } finally { }
}
export const postPost = (post: any) => async (dispatch: any) => {
    try {
        const res = await api.postPost(post)
        if (res.success) return dispatch({ type: POST_POST, payload: res.data });
        console.log(res);
    } catch (error) {
        console.error(error.message)
    } finally { }
}

export const getPost = () => async (dispatch: any) => {
    try {
        const res = await api.getPost()
        if (res.success) return dispatch({ type: GET_POST, payload: res.data });
        console.log(res);
    } catch (error) {
        console.error(error.message)
    } finally { }
}








export const updatePost = (post: any) => async (dispatch: any) => {
    try {
        const res = await api.updatePost(post)
        if (res.success) return dispatch({ type: UPDATE_POST, payload: res.data });
        console.log(res);
    } catch (error) {
        console.error(error.message)
    } finally { }
}
export const removePost = (post: any) => async (dispatch: any) => {
    try {
        const res = await api.removePost(post)
        if (res.success) return dispatch({ type: REMOVE_POST, payload: res.data });
        console.log(res);
    } catch (error) {
        console.error(error.message)
    } finally { }
}
