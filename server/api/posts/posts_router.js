const postsRouter = require('express').Router();
const postsCtrl = require('./posts_ctrl');
const { getPost, postPost, updatePost, deletePost, getManyPosts } = postsCtrl


postsRouter.get('/many', getManyPosts);
postsRouter.get('/post', getPost);
postsRouter.post('/post', postPost);
postsRouter.put('/post', updatePost);
postsRouter.delete('/post', deletePost);

module.exports = postsRouter;