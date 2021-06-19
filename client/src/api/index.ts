import BrowserStorage from '../utils/browserStorage.utils'
import axios from 'axios';
const baseURL = process.env.NODE_ENV === "production" ? "https://memories-my-app.herokuapp.com/" : "http://localhost:4201";
const posts = `${baseURL}/posts`;
const register = `${baseURL}/register`;
const users = `${baseURL}/users`;

export const signUpUser = async (credentials: any) => {
    const res = await axios.post(`${register}/signUp`, credentials);
    return res.data;
}
export const loginUser = async (credentials: any) => {
    const res = await axios.post(`${register}/logIn`, credentials);
    return res.data;
}
export const getUser = async () => {
    const res = await axios.post(`${users}/user`, undefined, options);
    return res.data;
}




export const getAllPosts = async () => {
    const res = await axios.get(`${posts}/many`);
    return res.data;
}

export const getPost = async () => {
    const res = await axios.get(`${posts}/post`);
    return res.data;
}
export const postPost = async (post: any) => {
    const res = await axios.post(`${posts}/post`, post);
    return res.data;
}
export const removePost = async (post: any) => {
    const res = await axios.delete(`${posts}/post`);
    return res.data;
}
export const updatePost = async (post: any) => {
    const res = await axios.put(`${posts}/post`, post);
    return res.data;
}
// const headers = {
//         "Origin": " http://127.0.0.1:3000",
//         "Access-Control-Request-Method ": " POST,DELETE,PUT,OPTIONS",
//         "Access-Control-Request-Headers ": " Authorization",
//         "Access-Control-Allow-Credentials ": " true",
//         'Access-Control-Allow-Origin': "true",
//         Authorization: `Bearer ${BrowserStorage.getToken()}`,

// }

const options = {
    baseURL,
    headers: {
        Authorization: `Bearer ${BrowserStorage.getToken()}`,
        // "Access-Control-Allow-Credentials ": " true",
        // "Access-Control-Allow-Origin":"",
    },

    // params: {},

    // // `adapter` allows custom handling of requests which makes testing easier.
    // // Return a promise and supply a valid response (see lib/adapters/README.md).
    //   adapter: function (config:any) {
    //     /* ... */
    //   },

    // `transformRequest` allows changes to the request data before it is sent to the server
    // This is only applicable for request methods 'PUT', 'POST', 'PATCH' and 'DELETE'
    // The last function in the array must return a string or an instance of Buffer, ArrayBuffer,
    // FormData or Stream
    // You may modify the headers object.
    // transformRequest: [function (data: any, headers: any) {
    //     console.log({ transformRequest_before: data });
    //     // Do whatever you want to transform the data
    //     console.log({ transformRequest_after: data });
    //     return data;
    // }],

    // // `transformResponse` allows changes to the response data to be made before
    // // it is passed to then/catch
    // transformResponse: [function (data) {
    // // Do whatever you want to transform the data
    // return data;
    // }],

    // // `xsrfCookieName` is the name of the cookie to use as a value for xsrf token
    //   xsrfCookieName: 'XSRF-TOKEN', // default

    // //`xsrfHeaderName` is the name of the http header that carries the xsrf token value
    //   xsrfHeaderName: 'X-XSRF-TOKEN', // default

    // onUploadProgress: function (progressEvent:any) {
    //     // Do whatever you want with the native progress event
    //   },

    // // `cancelToken` specifies a cancel token that can be used to cancel the request
    // // (see Cancellation section below for details)
    //   cancelToken: new CancelToken(function (cancel:any) {
    // }),

    // // *server side
    //  httpsAgent: new https.Agent({ keepAlive: true }),
};