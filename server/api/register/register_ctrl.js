const usersCollection = require("../users/users_model");
const register_validation = require("./register_validation");
const emailer = require("../../email/email");
const DB = require("../../utils/DB.utils");
const validation = require('../../utils/ctrl.utils');
const { successHandler, failHandler, errorHandler } = validation;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");
const { validateRegisterInput, validateLoginInput } = register_validation;
const { getDoc, updateDoc, postDocs } = DB;

/**
 * register user to users Collection
 * @param {*} req
 * @param {*} res 
 */
async function registerUser(req, res) {
    const user = req.body;
    let { email } = user;
    if (!email) return errorHandler('no user obj', res, 'register')
    const query = { email: email.trim() };
    console.log(`register user...${user.name}`);
    const { errors, isValid } = validateRegisterInput(user);
    if (!isValid) return res.status(400).json(errors);
    const getUserSuccess = () => failHandler(user, res, 'unique key');
    const getUserFail = async() => {
        user.password = await bcrypt.hash(user.password, 10);

        const asyncPost = await postDocs(usersCollection, user, postUserSuccess);
        if (asyncPost && asyncPost.error) throw asyncPost.error;
    };
    const postUserSuccess = async() => {
        console.log('post user success...');
        const getPostedUserSuccess = (data) => {
            console.log('get posted user success...');
            signToken(req, res, data, "signUp");
        };
        const getPostedUserFail = () => {
            console.log('get posted user success...');
            failHandler(user, res, 'registerUser/ getPostedUser')
        }
        const asyncGetPostedUser = await getDoc(usersCollection, query, getPostedUserSuccess, getPostedUserFail);
        if (asyncGetPostedUser && asyncGetPostedUser.error) throw asyncGetPostedUser.error;
    };
    try {
        const asyncGet = await getDoc(usersCollection, query, getUserSuccess, getUserFail);
        if (asyncGet && asyncGet.error) throw asyncGet.error;
    } catch (error) {
        errorHandler(error, res, 'registerUser', 400)
    } finally {}
}

/**
 * login user from users Collection
 * @param {*} req
 * @param {*} res
 */
async function loginUser(req, res) {
    console.log('login User...');
    const user = req.body;
    const { errors, isValid } = validateLoginInput(user);
    if (!isValid) return res.status(400).json(errors);
    let { email, password } = user;
    const query = { email };
    const getUserSuccess = async(data) => {
        const passwordFromDB = data.password;
        // if (!data.isAuth) return failHandler('auth user', res,'loginUser')
        const isMatch = await bcrypt.compare(password, passwordFromDB);
        if (!isMatch) return failHandler({ isMatch }, res, 'user credentials match')
        signToken(req, res, data, "logIn");
    };
    const getUserFail = () => {

        console.log(user);
        failHandler(user, res, 'loginUser/ getUser by email')
    }
    try {
        const asyncGet = await getDoc(usersCollection, query, getUserSuccess, getUserFail);
        if (asyncGet && asyncGet.error) throw asyncGet.error;
    } catch (error) {
        errorHandler(error, res, 'loginUser', 400)
    } finally {}
}
/**
 * sign token to user from users Collection
 * @param {*} req
 * @param {*} res
 * @param {*} payload
 * @param {*} message
 * @param {*} emailVerification
 */
const signToken = async(req, res, payload, message) => {
    const second = 1000;
    const minute = 60 * second
    const hour = 60 * minute
    const day = 24 * hour
    const year = day * 365
    const tokenOptions = { expiresIn: year }
    const { _id, name, email } = payload;
    const token = jwt.sign({ _id, name, email }, keys.secretOrKey, tokenOptions)
    const dataToUpdate = { _id, token };
    const updateUserFail = () => failHandler(dataToUpdate, res, `signToken- ${message}`)
    const updateUserSuccess = async() => {
        payload.token = token;
        successHandler(payload, res, message)
    };
    try {
        const asyncUpdate = await updateDoc(usersCollection, dataToUpdate, updateUserSuccess, updateUserFail);
        if (asyncUpdate && asyncUpdate.error) throw asyncUpdate.error;
    } catch (error) {
        errorHandler(error, res, 'signToken-', 400)
    } finally {}
};

module.exports = {
    registerUser,
    loginUser,
};