import axios from 'axios';
import { baseURL } from './utils.api'
import { IPost } from '../components/Post/utils';
const posts = `${baseURL}/posts`;

export const getPosts = async (post?: IPost | undefined, limit?: number) => {

    const query = {
        limit,
        title: post?.title,
        creator: post?.creator,
        message: post?.message,
        tags: post?.tags,
    }


    try {
        const res = await axios.post(posts, query);
        return res.data;

    } catch (error) {
        console.error(error)
    } finally { }
}
export const getPost = async (id: string) => {
    try {
        const res = await axios.get(`${posts}/post/${id}`);
        return res.data;

    } catch (error) {
        console.error(error)
    } finally { }
}
export const postPost = async (post: any) => {
    try {
        const res = await axios.post(`${posts}/post`, post);
        return res.data;

    } catch (error) {
        console.error(error)
    } finally { }
}
export const removePost = async (post: any) => {
    try {
        const res = await axios.delete(`${posts}/post`);
        return res.data;

    } catch (error) {
        console.error(error)
    } finally { }
}
export const updatePost = async (post: any) => {
    try {
        const res = await axios.put(`${posts}/post`, post);
        return res.data;

    } catch (error) {
        console.error(error)
    } finally { }
}
export const likePost = async (like: any) => {
    try {
        const res = await axios.post(`${posts}/post/like`, like);
        return res.data;

    } catch (error) {
        console.error(error)
    } finally { }
}