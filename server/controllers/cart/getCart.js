const { getCartQuery } = require('../../database/queries/cart');
const CustomizeError = require('../../utils/customError');

const getCart = (req, res, next) => {
  const { userId } = req.params;
  getCartQuery(userId)
    .then((data) => res.json(data.rows))
    .catch((err) => next(new CustomizeError(500, err.message)));
};

module.exports = getCart;
