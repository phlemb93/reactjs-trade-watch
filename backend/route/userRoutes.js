const { get_all_users, get_single_user, update_single_user, delete_single_user } = require('../controller/userController');
const { verifyTokenAndAuthorization } = require('../middlewares/verifyToken');

const route = require('express').Router();



// route.get('/', get_all_users)
route.get('/:id', verifyTokenAndAuthorization, get_single_user)
route.put('/:id', verifyTokenAndAuthorization, update_single_user)
route.delete('/:id', verifyTokenAndAuthorization, delete_single_user)



module.exports = route;