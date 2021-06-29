const mongoose = require('mongoose')

const idChecker = (id, res) => {
    if (!id) return res.status(400).json({
        success: false,
        message: 'id is required'
    })
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({
            success: false,
            message: 'corrupt id'
        })
    }
    return ({
        success: true,
        message: 'id exist'
    })
}

const tokenChecker = (token, res) => {
    if (!token) return res.status(400).json({
        success: false,
        message: 'auth token is required'
    })
    return ({
        success: true,
        message: 'token exist'
    })
}

const queryChecker = (query, res) => {
    if (!query || Object.keys(query).length === 0) return res.status(400).json({
        success: false,
        message: 'query data is required'
    })
    return ({
        success: true,
        message: 'query exist'
    })
}

const errorHandler = (error, res, method, status = 404) => res.status(status).json({
    success: false,
    message: `${method} failure`,
    error: error.message,
    errorFull: error,
})

const successHandler = (data, res, method, status = 200) => res.status(status).json({
    success: true,
    message: `${method} success`,
    data,
})

const failHandler = (data, res, method, status = 400) => res.status(status).json({
    success: false,
    message: `${method} failure`,
    data,
})

module.exports = { idChecker, tokenChecker, queryChecker, successHandler, failHandler, errorHandler }