const route = require('express').Router();
const { user_register, user_login } = require('../controller/authContoller')


route.post('/register', user_register)
route.post('/login', user_login)


module.exports = route;