const bcrybt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { getUserByEmail } = require('../../database/queries/users');
const { signInSchema } = require('../../validation');
const CustumError = require('../../utils/customError');

module.exports = (req, res, next) => {
  const { email, password } = req.body;
  let userEmail = '';
  let userId = '';
  let userName = '';
  let userAvatar = '';

  const { error } = signInSchema.validate({
    email,
    password,
  });
  if (error) {
    throw new CustumError(400, error);
  } else {
    getUserByEmail(email)
      .then((data) => {
        if (data.rows.length === 0) {
          throw new CustumError(400, 'Invalid Email or Password !');
        } else {
          return data.rows[0];
        }
      })
      .then((user) => {
        userEmail = user.email;
        userId = user.id;
        userName = user.username;
        userAvatar = user.avatar;
        return bcrybt.compare(password, user.password);
      })
      .then((result) => {
        if (result) {
          const payload = {
            id: userId,
            username: userName,
            email: userEmail,
          };
          return jwt.sign(payload, process.env.SECERT_KEY, {
            algorithm: 'HS256',
          });
        }
        throw new CustumError(400, 'Invalid Email or Password !');
      })
      .then((token) => {
        res
          .cookie('token', token, { httpOnly: true })
          .status(200)
          .json({
            message: 'success',
            status: 200,
            username: {
              nemail: userEmail,
              id: userId,
              name: userName,
              avatar: userAvatar,
            },
          });
      })
      .catch((err) => next(err));
  }
};
