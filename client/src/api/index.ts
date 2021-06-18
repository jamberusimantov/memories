import BrowserStorage from '../utils/browserStorage.utils'
import axios from 'axios';
const API = process.env.NODE_ENV === "production" ? "https://memories.herokuapp.com" : "http://localhost:4201";
const posts = `${API}/posts`;
const register = `${API}/register`;
const users = `${API}/users`;

const options = {
    headers: {
        Authorization: `Bearer ${BrowserStorage.getToken()}`,
    },
};

export const getAllPosts = async () => await axios.get(posts);
export const postPost = async (post: any) => await axios.post(posts, post);

export const signUpUser = async (credentials: any) => await axios.post(`${register}/signUp`, credentials);
export const loginUser = async (credentials: any) => await axios.post(`${register}/logIn`, credentials);
export const getUser = async () => await axios.post(`${users}/single`, undefined, options);






export const getPost = () => axios.get(posts);
export const removePost = (post: any) => axios.delete(posts);
export const updatePost = (post: any) => axios.put(posts, post);
