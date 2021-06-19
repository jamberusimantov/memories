const postsCollection = require("../posts/posts_model");
const posts_validation = require("./posts_validation");
const emailer = require("../../email/email");
const DB = require("../../utils/DB.utils");
const utils = require('../../utils/ctrl.utils');
const { successHandler, failHandler, errorHandler } = utils;



const getManyPosts = async(req, res) => {
    try {
        console.log('get many posts...');
        const posts = await postsCollection.find();
        if (!posts.length) return failHandler(posts, res, 'getPosts');
        successHandler(posts, res, 'getPosts');
    } catch (error) {
        errorHandler(error, res, 'getPosts');
    } finally {}
}
const getPost = async(req, res) => {
    try {
        console.log('get post...');
        const posts = await postsCollection.find();
        if (!posts.length) return failHandler(posts, res, 'getPosts');
        successHandler(posts, res, 'getPosts');
    } catch (error) {
        errorHandler(error, res, 'getPosts');
    } finally {}
}
const postPost = async(req, res) => {
    const post = req.body;
    const newPost = new postsCollection(post)
    try {
        console.log('post post...');
        await newPost.save();
        successHandler(newPost, res, 'postPost', 201);
    } catch (error) {
        errorHandler(error, res, 'postPost', 409);
    } finally {}
}








const updatePost = async(req, res) => {
    try {
        console.log('update post...');
    } catch (error) {
        errorHandler(error, res, 'updatePost');
    } finally {}
}
const deletePost = async(req, res) => {
    try {
        console.log('delete post...');

    } catch (error) {
        errorHandler(error, res, 'deletePost');
    } finally {}
}

module.exports = { getPost, postPost, updatePost, deletePost, getManyPosts }