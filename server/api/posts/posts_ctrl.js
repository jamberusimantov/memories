const validator = require('./post_validation')
const postsCollection = require("../posts/posts_model");
// const emailer = require("../../email/email");
const utils = require('../../utils/ctrl.utils');
const { successHandler, failHandler, errorHandler } = utils;



const getManyPosts = async(req, res) => {
    console.log('get many posts...');
    try {
        const searchMethod = data => ({ $regex: data })
        const validate = validator(req.body, searchMethod)
        const query = validate.query
        const limit = req.body.limit ? req.body.limit : 6;
        const aggOpt = !validate.isQuery ? { $sort: { _id: -1 } } : { $match: query };
        const posts = await postsCollection.aggregate([aggOpt]).limit(limit);
        if (!posts) return failHandler(query, res, 'getManyPosts')
        successHandler(posts, res, 'getManyPosts');
        console.log(`success get ${posts.length} posts...`);
    } catch (error) {
        errorHandler(error, res, 'getManyPosts');
        console.log(`error get posts...`);
    } finally {}
}
const getPost = async(req, res) => {

    const { Id } = req.params;
    console.log(`get post id: ${Id}...`);
    try {
        const post = await postsCollection.findById(Id);
        if (!post) return failHandler(Id, res, 'getPost')
        successHandler(post, res, 'getPost');
        console.log(`send post ${post.title}...`);
    } catch (error) {
        errorHandler(error, res, 'getPosts');
        console.log(`error get post ${post.title}...`);
    } finally {}
}
const postPost = async(req, res) => {
    const post = req.body;
    console.log(`post post: ${post.title}...`);
    const newPost = new postsCollection(post)
    try {
        await newPost.save();
        successHandler(newPost, res, 'postPost', 201);
        console.log(`success post post ${post.title}...`);
    } catch (error) {
        errorHandler(error, res, 'postPost', 409);
        console.log(`error post post ${post.title}...`);
    } finally {}
}
const likePost = async(req, res) => {
    const { post, user } = req.body;
    console.log(`like post: ${post}...`);
    try {
        const postDb = await postsCollection.findById(post);
        if (!postDb) return failHandler(post, res, 'getPost')
        const dataToUpdate = { likes: [...postDb.likes, user] }
        const like = await postsCollection.findByIdAndUpdate(post, dataToUpdate);
        if (!like) return failHandler(req.body, res, 'likePost')
        successHandler(req.body, res, 'likePost');
        console.log(`success like post ${post}...`);
    } catch (error) {
        errorHandler(error, res, 'likePost', 400);
        console.log(`error like post ${post}...`);
    } finally {}
}
const updatePost = async(req, res) => {
    const post = req.body;
    const { _id } = post
    console.log(`update post ${_id}...`);
    try {
        const updatePost = await postsCollection.findByIdAndUpdate(_id, post);
        if (!updatePost) return failHandler(post, res, 'updatePost')
        successHandler(post, res, 'update Post');
        console.log(`success update post ${updatePost._id}...`);
    } catch (error) {
        errorHandler(error, res, 'updatePost');
        console.log(`error update post ${post._id}...${error.message}`);
    } finally {}
}
const deletePost = async(req, res) => {
    const post = req.body;
    const { _id } = post
    console.log(`delete post ${_id}...`);
    try {
        const deletePost = await postsCollection.findByIdAndDelete(_id, post);
        if (!deletePost) return failHandler(deletePost, res, 'delete Post')
        successHandler(updatePost, res, 'delete Post');
        console.log(`success delete post ${post._id}...`);
    } catch (error) {
        errorHandler(error, res, 'deletePost');
        console.log(`error delete post ${post._id}...`);
    } finally {}
}

module.exports = { getPost, postPost, updatePost, deletePost, getManyPosts, likePost }