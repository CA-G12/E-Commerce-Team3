const CustomizeError = require('../../utils/customError');
const { hashPassword } = require('../../utils/customBcrypt');
const { createUser, getUserByEmail } = require('../../database/queries/users');
const { jwtSign } = require('../../utils/customJwt');
const signUpschema = require('../../validation/users/signupSchema');

const signup = (req, res, next) => {
  const { username, email, password, confirmPassword, avatar } = req.body;
  signUpschema
    .validateAsync(req.body)

    .then(() => getUserByEmail(email))

    .then((data) => {
      if (data.rows.length > 0) {
        throw new CustomizeError(401, 'this email is in use');
      }
      return hashPassword(password);
    })

    .then((hashed) => createUser(username, email, avatar, hashed))
    .then((payload) => jwtSign(payload))
    .then((token) => {
      if (token) {
        res.cookie('token', token, { httpOnly: true }).status(201).json({
          sucess: true,
          username,
          operation: 'create user',
          avatar,
        });
      } else {
        throw new CustomizeError(500, 'failed');
      }
    })
    .catch((err) => next(err));
};

module.exports = signup;
