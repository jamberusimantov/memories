import axios from 'axios';
import { baseURL } from './utils.api'

const files = `${baseURL}/files`;

export const fetchFile = async (Id: string) => {
    try {
        const res = await axios.get(`${files}/download/${Id}`);
        return res.data;

    } catch (error) {
        console.error(error)
    } finally { }
}