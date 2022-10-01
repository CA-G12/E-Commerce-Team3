const userRouter = require('express').Router();
const { signup, signOut, signIn } = require('../controllers/users');
const getUserData = require('../middlewares/getUserData');
const isAuth = require('../middlewares/isAuth');

userRouter.post('/users/signup', signup);
userRouter.post('/users/login', signIn);
userRouter.get('/users/logout', signOut);
userRouter.get('/users/checkAuth', isAuth, getUserData);
module.exports = userRouter;
