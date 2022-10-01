const CustomizeError = require('../../utils/customError');
const { hashPassword } = require('../../utils/customBcrypt');
const { createUser, getUserByEmail } = require('../../database/queries/users');
const { jwtSign } = require('../../utils/customJwt');
const signUpSchema = require('../../validation/users/signupSchema');

const signup = (req, res, next) => {
  const { username, email, password, avatar } = req.body;
  signUpSchema

    .validateAsync({ username, email, password, avatar })
    .catch((err) => {
      throw new CustomizeError(400, err);
    })

    .then(() => getUserByEmail(email))
    .then((data) => {
      if (data === undefined) {
        throw new CustomizeError(404, 'not Found');
      }
      if (data.rows.length > 0) {
        throw new CustomizeError(401, 'this email is in use');
      }
      return hashPassword(password);
    })

    .then((hashed) => createUser(username, email, hashed, avatar))
    .then((data) => {
      // eslint-disable-next-line no-console
      console.log('asas');
      return { id: data.rows[0].id, email, username };
    })
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
    .catch((err) => {
      next(err);
    });
};

module.exports = signup;
