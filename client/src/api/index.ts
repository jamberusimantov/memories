import axios from 'axios';
const API = process.env.NODE_ENV === "production" ? "https://memories.herokuapp.com" : "http://localhost:4201";
const posts = `${API}/posts`;

export const getAllPosts = () => axios.get(posts);
export const postPost = (post: any) => axios.post(posts, post);


export const getPost = () => axios.get(posts);
export const removePost = (post: any) => axios.delete(posts);
export const updatePost = (post: any) => axios.put(posts, post);
