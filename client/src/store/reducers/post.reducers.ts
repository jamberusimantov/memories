import * as actionTypes from '../actions/posts.actions';
const { GET_POST, GET_POSTS, POST_POST, UPDATE_POST, REMOVE_POST } = actionTypes;
const reducer = (posts: { _id: string, title: string, message: string, tags: string }[] = [], action: any) => {
    switch (action.type) {
        case GET_POSTS: return action.payload;
        case GET_POST: return [action.payload];
        case POST_POST: return [...posts, action.payload];
        case UPDATE_POST: return [...posts.map(post => {
            if (post._id === action.payload._id) {
                post.title = action.payload.title;
                post.message = action.payload.message;
                post.tags = action.payload.tags;
            } return post;
        })];
        case REMOVE_POST: return posts.filter(post => post._id === action.payload._id);
        default: return posts;
    }
}
export default reducer;