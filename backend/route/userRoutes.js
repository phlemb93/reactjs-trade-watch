const { get_all_users, get_single_user, update_single_user, delete_single_user } = require('../controller/userController');

const route = require('express').Router();



route.get('/', get_all_users)
route.get('/:id', get_single_user)
route.put('/:id', update_single_user)
route.delete('/:id', delete_single_user)



module.exports = route;