const register = require('../controller/registerHandler')
const login = require('../controller/loginHandler')
const getUser = require('../controller/getUser')
const logout = require ('../controller/logOutHandler')
const google = require ('../controller/googleHandler')

module.exports = app => {
    app.post('/login', login.login)

    app.post('/register', register.addUser)

    app.post('/login/google', google.addGoogleUser)

    app.get('/user', getUser.getUser)

    app.get('/logout', logout.logout)
}