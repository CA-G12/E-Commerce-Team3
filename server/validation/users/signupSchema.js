const joi = require('joi');

const signUpSchema = joi.object({
  email: joi.string().min(3).email().required(),
  username: joi.string().required(),
  password: joi.string().min(8).max(26).required(),
  avatar: joi.string().required(),
});

module.exports = signUpSchema;
