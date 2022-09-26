const CustomizeError = require('../../utils/customError');
const { hashPassword } = require('../../utils/customBcrypt');
const { createUser, getUserByEmail } = require('../../database/queries/users');
const { jwtSign } = require('../../utils/customJwt');
const signUpschema = require('../../validation/users/signupSchema');

const signup = (req, res, next) => {
  try {
    const { username, email, password, confirmPassword, avatar } = req.body;
    const { error } = signUpschema.validate({
      username,
      email,
      password,
      confirmPassword,
      avatar,
    });

    if (error) {
      throw new CustomizeError(400, error);
    }
    getUserByEmail(email)
      .then((data) => {
        if (data.rows > 0) {
          throw new CustomizeError(401, 'this email is in use');
        }
        return data.rows;
      })
      .then(() => hashPassword(password))
      .then((data) => {
        const { id, usernName, Email } = data.rows[0];
        return { id, usernName, Email };
      })
      .then((hashed) => createUser(username, email, avatar, hashed))
      .then((payload) => jwtSign(payload))
      .then((token) => {
        res.cookie('token', token, { httpOnly: true }).status(201).json({
          sucess: true,
          username,
          operation: 'create user',
          avatar,
        });
      })
      .catch((err) => next(err));
  } catch (err) {
    next(err);
  }
};

module.exports = signup;
