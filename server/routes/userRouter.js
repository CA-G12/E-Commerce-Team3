const userRouter = require('express').Router();
const { signup, signOut, signIn } = require('../controllers/users');

userRouter.post('/users/signup', signup);
userRouter.post('/users/login', signIn);
userRouter.get('/users/logout', signOut);
module.exports = userRouter;
