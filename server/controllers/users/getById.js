const CustomizeError = require('../../utils/customError');
const { hashPassword } = require('../../utils/customBcrypt');
const { createUser, getUserByEmail } = require('../../database/queries/users');
const { jwtSign } = require('../../utils/customJwt');
const { signUpschema } = require('../../validation');

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
    let userId = '';

    if (error) {
      throw new CustomizeError(400, error);
    }
    getUserByEmail(email)
      .then((data) => {
        if (data.rows > 1) {
          throw new CustomizeError(401, 'this email is used');
        }
      })
      .then(() => {
        hashPassword(password);
      })
      .then((hashed) => createUser(username, email, avatar, hashed))
      .then((data) => {
        const { id, usernName, Email } = data.rows[0];
        userId = data.rows[0].id;
        return { id, usernName, Email };
      })
      .then((payload) => jwtSign(payload))
      .then((token) => {
        res
          .cookie('token', token, { httpOnly: true })
          .status(201)
          .json({
            sucess: true,
            user: {
              name: username,
              id: userId,
              avatar,
              email,
            },
            operation: 'create user',
          });
      })
      .catch((err) => next(err));
  } catch (err) {
    next(err);
  }
};

module.exports = signup;
