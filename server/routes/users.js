const userRouter = require('express').Router();
const { signup, login, logout } = require('../controllers/users');

userRouter.post('/users/signup', signup);
userRouter.post('/users/login', login);
userRouter.get('/users/logout', logout);
module.exports = userRouter;
