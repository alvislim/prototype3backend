const mongoose = require('mongoose')

module.exports = loginHandler = {
    getUser: (req, res, next) => {
        res.send(req.user)
    },
    getGoogleUser: (req, res, next) => {
        console.log(res)
        res.send(req.profileObj)
    }
} 