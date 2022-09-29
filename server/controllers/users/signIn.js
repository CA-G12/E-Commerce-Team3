const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const { getUserByEmail } = require('../../database/queries/users');
const { signInSchema } = require('../../validation');
const CustomizeError = require('../../utils/customError');

module.exports = (req, res, next) => {
  const { email, password } = req.body;
  let userEmail = '';
  let userId = '';
  let userName = '';
  let userAvatar = '';

  signInSchema
    .validateAsync({
      email,
      password,
    })
    .catch((err) => {
      throw new CustomizeError(400, err);
    })
    .then(() => getUserByEmail(email))
    .then((data) => {
      if (data.rows.length === 0) {
        throw new CustomizeError(400, 'Invalid Email or Password !');
      } else {
        return data.rows[0];
      }
    })
    .then((user) => {
      userEmail = user.email;
      userId = user.id;
      userName = user.name;
      userAvatar = user.avatar;
      return bcrypt.compare(password, user.password);
    })
    .then((result) => {
      if (!result) throw new CustomizeError(400, 'Invalid Email or Password !');

      const payload = {
        id: userId,
        username: userName,
        email: userEmail,
      };

      return jwt.sign(payload, process.env.SECRET, {
        algorithm: 'HS256',
      });
    })
    .then((token) => {
      res
        .cookie('token', token, { httpOnly: true })
        .status(200)
        .json({
          msg: 'success',
          status: 200,
          user: {
            email: userEmail,
            id: userId,
            name: userName,
            avatar: userAvatar,
          },
        });
    })
    .catch((err) => next(err));
};
