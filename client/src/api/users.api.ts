import axios from 'axios';
import { options, baseURL } from './utils.api'

const register = `${baseURL}/register`;
const users = `${baseURL}/users`;


export const signUpUser = async (credentials: any) => {
    try {
        const res = await axios.post(`${register}/signUp`, credentials);
        return res.data;
    } catch (error) {
        console.error(error)
    } finally { }
}
export const loginUser = async (credentials: any) => {
    try {
        const res = await axios.post(`${register}/logIn`, credentials);
        return res.data;
    } catch (error) {
        console.error(error)
    } finally { }
}
export const getUser = async () => {
    try {
        console.log('get User...');
        const res = await axios.post(`${users}/user`, undefined, options);
        return res.data;
    } catch (error) {
        console.error(error)
    } finally { }
}
export const updateUserTheme = async (theme: any) => {
    try {
        const res = await axios.put(`${users}/user`, theme, options);
        return res.data;

    } catch (error) {
        console.error(error)
    } finally { }
}