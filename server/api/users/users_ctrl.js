const usersCollection = require('./users_model');
const DB = require('../../utils/DB.utils');
const validation = require('../../utils/ctrl.utils');
const { tokenChecker, queryChecker, successHandler, failHandler } = validation;
const { getDoc, updateDoc, deleteDoc, getManyDocs } = DB;
/**
 * get many user from users collection
 * @param {*} req 
 * @param {*} res 
 */
async function getManyUsers(req, res) {
    console.log('get many Users...');
    const token = req.headers.authorization;
    const isToken = tokenChecker(token, res);
    const user = req.body.user;
    if (!isToken.success) return;
    const getUserSuccess = data => successHandler(data, res, 'getManyUsers')
    const getUserFail = () => failHandler(token, res)
    try {
        const asyncGet = await getManyDocs(usersCollection, user, getUserSuccess, getUserFail)
        if (asyncGet && asyncGet.error) throw asyncGet.error;
    } catch (error) {
        res.status(400).json({ success: false, error })
    } finally {}
}
/**
 * get user by token from users collection
 * @param {*} req 
 * @param {*} res 
 */
async function getUser(req, res) {
    console.log('get User...');
    const token = req.headers.authorization.substr(7)
    const isToken = tokenChecker(token, res)
    if (!isToken.success) return;
    const getUserSuccess = data => successHandler(data, res, 'getUser')
    const getUserFail = () => failHandler(token, res, 'getUser-users_api')
    try {
        const asyncGet = await getDoc(usersCollection, { token }, getUserSuccess, getUserFail)
        if (asyncGet && asyncGet.error) throw asyncGet.error;
    } catch (error) {
        res.status(400).json({ success: false, error })
    } finally {}
}

/**
 * update user from users collection
 * @param {*} req 
 * @param {*} res 
 */
async function updateUser(req, res) {
    console.log('update User...');
    if (!req.headers.authorization) return failHandler('authorization is required', res, 'updateUser');
    const token = req.headers.authorization.substr(7);
    const isToken = tokenChecker(token, res);
    const user = req.body;
    const isUser = queryChecker(user, res);
    if (!isToken.success || !isUser.success) return;
    user.token = token;
    const updateUserSuccess = data => successHandler(data, res, 'updateUser');
    const updateUserFail = () => failHandler(_id, res);
    try {
        const asyncUpdate = await updateDoc(usersCollection, user, updateUserSuccess, updateUserFail);
        if (asyncUpdate && asyncUpdate.error) throw asyncUpdate.error;
    } catch (error) {
        res.status(400).json({ success: false, error });
    } finally {}
}

/** 
 * delete user from users collection
 * @param {*} req 
 * @param {*} res 
 */
async function deleteUser(req, res) {
    console.log('delete User...');
    const token = req.headers.authorization.substr(7)
    const isToken = tokenChecker(token, res)
    if (!isToken.success) return;
    const deleteUserSuccess = data => successHandler(data, res, 'deleteUser')
    const deleteUserFail = () => failHandler(token, res)
    try {
        const asyncDelete = await deleteDoc(usersCollection, { token }, deleteUserSuccess, deleteUserFail);
        if (asyncDelete && asyncDelete.error) throw asyncDelete.error;
    } catch (error) {
        res.status(400).json({ success: false, error })
    } finally {}
}

module.exports = {
    getUser,
    updateUser,
    deleteUser,
    getManyUsers,
}