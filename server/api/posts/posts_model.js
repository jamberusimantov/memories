const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const post = new Schema({
    title: String,
    message: String,
    creator: String,
    creatorId: String,
    isHidden: {
        type: Boolean,
        default: false
    },
    tags: String,
    file: Object,
    likes: Array,
}, { timestamps: true });

module.exports = mongoose.model("post", post);