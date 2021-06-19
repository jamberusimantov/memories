import * as actionTypes from '../actions/posts';
const { GET_ALL, GET_POST, POST_POST, UPDATE_POST, REMOVE_POST } = actionTypes;
const reducer = (posts = [], action: any) => {
    switch (action.type) {
        case GET_ALL: return action.payload;
        case GET_POST: return action.payload;
        case POST_POST: return [...posts, action.payload];



        case UPDATE_POST: return action.payload;
        case REMOVE_POST: return action.payload;
        default: return posts;
    }
}
export default reducer;