const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const post = new Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    file: Object,
    likeCount: {
        type: Number,
        default: 0
    },
}, { timestamps: true });

module.exports = mongoose.model("post", post);