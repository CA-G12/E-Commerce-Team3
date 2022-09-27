const jwt = require('jsonwebtoken');

const CustumError = require('../utils/customError');

module.exports = (req, res, next) => {
  try {
    const { token } = req.cookies.token;
    if (!token) {
      throw new CustumError(401, 'Unauthorized');
    } else {
      const decoded = jwt.verify(token, process.env.SECERT_KEY);
      req.userId = decoded.id;
      next();
    }
  } catch (err) {
    next(err);
  }
};
