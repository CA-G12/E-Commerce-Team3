const joi = require('joi');

module.exports = joi.object({
  email: joi.string().email().required(),
  password: joi.string().min(8).max(50).required(),
});
