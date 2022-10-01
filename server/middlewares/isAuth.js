const jwt = require('jsonwebtoken');
require('dotenv').config();

const CustumError = require('../utils/customError');

module.exports = (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      throw new CustumError(401, 'Unauthorized');
    } else {
      const decoded = jwt.verify(token, process.env.SECRET);
      req.user = decoded;
      next();
    }
  } catch (err) {
    next(err);
  }
};
