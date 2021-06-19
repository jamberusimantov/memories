const usersRouter = require('express').Router()
const usersCtrl = require('./users_ctrl')

usersRouter.post('/many', usersCtrl.getManyUsers)

usersRouter.post('/user', usersCtrl.getUser)
usersRouter.put('/user', usersCtrl.updateUser)
usersRouter.delete('/user', usersCtrl.deleteUser)

module.exports = usersRouter