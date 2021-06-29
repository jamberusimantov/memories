const postsRouter = require('express').Router();
const postsCtrl = require('./posts_ctrl');
const { getPost, postPost, updatePost, deletePost, getManyPosts, likePost } = postsCtrl


postsRouter.post('/post/like', likePost);
postsRouter.post('/post', postPost);
postsRouter.get('/post/:Id', getPost);
postsRouter.put('/post', updatePost);
postsRouter.delete('/post', deletePost);
postsRouter.post('/', getManyPosts);

module.exports = postsRouter;