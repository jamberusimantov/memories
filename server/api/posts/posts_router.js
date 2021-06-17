const postsRouter = require('express').Router();
const postsCtrl = require('./posts_ctrl');
const { getPost, postPost, updatePost, deletePost } = postsCtrl;




postsRouter.get('/', getPost);
postsRouter.post('/', postPost);
postsRouter.put('/', updatePost);
postsRouter.delete('/', deletePost);

module.exports = postsRouter;