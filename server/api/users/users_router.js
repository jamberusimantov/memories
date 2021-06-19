const usersRouter = require('express').Router()
const usersCtrl = require('./users_ctrl')

usersRouter.post('/many', usersCtrl.getManyUsers)
usersRouter.post('/single', usersCtrl.getUser)
usersRouter.put('/single', usersCtrl.updateUser)
usersRouter.delete('/single', usersCtrl.deleteUser)

module.exports = usersRouter