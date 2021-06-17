const registerRouter = require('express').Router()
const registerCtrl = require('./register_ctrl')

registerRouter.post('/signUp', registerCtrl.registerUser)
registerRouter.post('/logIn', registerCtrl.loginUser)

module.exports = registerRouter;