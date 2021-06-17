import * as api from '../../api';

export const GET_ALL = 'GET_ALL';
export const GET_POST = 'GET_POST';
export const POST_POST = 'POST_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const REMOVE_POST = 'REMOVE_POST';

export const getAllPosts = () => async (dispatch: any) => {
    try {
        const { data } = await api.getAllPosts()
        if (data.success) return dispatch({ type: GET_ALL, payload: data.data });
        console.log(data);
    } catch (error) {
        console.error(error.message)
    } finally { }
}
export const postPost = (post: any) => async (dispatch: any) => {
    try {
        const { data } = await api.postPost(post)
        if (data.success) return dispatch({ type: POST_POST, payload: data.data });
        console.log(data);
    } catch (error) {
        console.error(error.message)
    } finally { }
}

export const getPost = () => async (dispatch: any) => {
    try {
        const { data } = await api.getPost()
        if (data.success) return dispatch({ type: GET_POST, payload: data });
        console.log(data);
    } catch (error) {
        console.error(error.message)
    } finally { }
}


export const updatePost = (post: any) => async (dispatch: any) => {
    try {
        const { data } = await api.updatePost(post)
        if (data.success) return dispatch({ type: UPDATE_POST, payload: data });
        console.log(data);
    } catch (error) {
        console.error(error.message)
    } finally { }
}
export const removePost = (post: any) => async (dispatch: any) => {
    try {
        const { data } = await api.removePost(post)
        if (data.success) return  dispatch({ type: REMOVE_POST, payload: data });
        console.log(data);
    } catch (error) {
        console.error(error.message)
    } finally { }
}
