const joi = require('joi');

const signUpSchema = joi.object({
  email: joi.string().min(3).email().required(),
  name: joi.string().required(),
  password: joi.string().min(8).max(26).required(),
  confirmPassword: joi.any().valid(joi.ref('password')).required(),
  logo: joi.string().required(),
});

module.exports = signUpSchema;
