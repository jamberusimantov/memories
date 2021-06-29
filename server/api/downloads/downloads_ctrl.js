const posts = require('.././posts/posts_ctrl')
const postsCollection = require("../posts/posts_model");
const utils = require('../../utils/ctrl.utils');
const { successHandler, failHandler, errorHandler } = utils;

const fetchFile = async(req, res) => {
    try {
        const { Id } = req.params;
        console.log(`get file id: ${Id}...`);
        const post = await postsCollection.findById(Id);
        if (!post) return failHandler(Id, res, 'getFile')
        const validName = () => {
            const nameURI = encodeURI(post.file.name, "GBK")
            const notValid = post.file.name.split('').some((char, index) =>
                char.charCodeAt(index) < 48 ||
                char.charCodeAt(index) > 57 && char.charCodeAt(index) < 65 ||
                char.charCodeAt(index) > 90 && char.charCodeAt(index) < 97 ||
                char.charCodeAt(index) > 122
            )
            return notValid ? nameURI : `${post.file.name}`;
        }
        console.log(`send file... ${post.file.name}`);
        res.set({
            "Content-Type": "application/octet-stream",
            "Content-Disposition": `attachment; filename="${validName()}"`
        })
        successHandler(post.file, res, 'getFile');
    } catch (error) {
        return {
            success: false,
            message: 'fetchFile failure',
            error: error.message
        }
    } finally {}
}


const getFile = async(req, res) => {
    const file = await fetchFile(req, res);
    if (file && !file.success) console.log(file);
}


module.exports = {
    getFile,
}