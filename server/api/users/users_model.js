const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user = new Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    isAuth: Boolean,
    token: String,
    pictures: {
        type: Object,
    },
}, { timestamps: true });
module.exports = mongoose.model("user", user);