const usersRouter = require('express').Router()
const usersCtrl = require('./users_ctrl')

usersRouter.post('/single', usersCtrl.getUser)
usersRouter.post('/many', usersCtrl.getManyUsers)
usersRouter.put('/single', usersCtrl.updateUser)
usersRouter.delete('/single', usersCtrl.deleteUser)

module.exports = usersRouter