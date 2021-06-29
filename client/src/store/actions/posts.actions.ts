import * as api from '../../api';
import { IPost } from '../../components/Post/utils'
export const GET_POSTS = 'GET_POSTS';
export const GET_POST = 'GET_POST';
export const POST_POST = 'POST_POST';
export const LIKE_POST = 'LIKE_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const REMOVE_POST = 'REMOVE_POST';

export const likePost = (like: any, message?: (msg: string) => void) => async (dispatch: any) => {
    try {
        const res = await api.posts.likePost(like)
        if (res.success) {
            const msg = 'success like a post'
            message ? message(msg) : console.log(msg);
            return dispatch({ type: LIKE_POST, payload: res.data });
        }
        console.log(res);
    } catch (error) {
        console.error(error.message)
    } finally { }
}
export const postPost = (post: IPost, message?: (msg: string) => void) => async (dispatch: any) => {
    try {
        const res = await api.posts.postPost(post)
        if (res.success) {
            const msg = 'success post a post'
            message ? message(msg) : console.log(msg);
            return dispatch({ type: POST_POST, payload: res.data });
        }
        console.log(res);
    } catch (error) {
        console.error(error.message)
    } finally { }
}
export const getPosts = (post?: IPost | undefined, message?: (msg: string) => void) => async (dispatch: any) => {
    try {
        const res = await api.posts.getPosts(post);
        if (res.success) {
            const msg = 'success get many posts'
            message ? message(msg) : console.log(msg);
            return dispatch({ type: GET_POSTS, payload: res.data });
        }
        console.log(res);
    } catch (error) {
        console.error(error.message)
    } finally { }
}
export const getPost = (post: { _id: string }, message?: (msg: string) => void) => async (dispatch: any) => {
    try {
        const res = await api.posts.getPost(post._id)
        if (res.success) {
            const msg = 'success get a post'
            message ? message(msg) : console.log(msg);
            return dispatch({ type: GET_POST, payload: res.data });
        }
        console.log(res);
    } catch (error) {
        console.error(error.message)
    } finally { }
}
export const updatePost = (post: IPost, message?: (msg: string) => void) => async (dispatch: any) => {
    try {
        const res = await api.posts.updatePost(post)
        if (res.success) {
            const msg = 'success update a post'
            message ? message(msg) : console.log(msg);
            return dispatch({ type: UPDATE_POST, payload: res.data });
        }
        console.log(res);
    } catch (error) {
        console.error(error.message)
    } finally { }
}
export const removePost = (post: IPost, message?: (msg: string) => void) => async (dispatch: any) => {
    try {
        const res = await api.posts.removePost(post)
        if (res.success) {
            const msg = 'success remove a post'
            message ? message(msg) : console.log(msg);
            return dispatch({ type: REMOVE_POST, payload: res.data });
        }
        console.log(res);
    } catch (error) {
        console.error(error.message)
    } finally { }
}
