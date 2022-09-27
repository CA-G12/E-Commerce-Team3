const { updateCartQuery } = require('../../database/queries/cart');
const CustomizeError = require('../../utils/customError');

const updateCart = (req, res, next) => {
  const { userId, productId, count } = req.body;
  updateCartQuery({ userId, productId, count })
    .then((data) => res.json(data.rows))
    .catch((err) => next(new CustomizeError(500, err.message)));
};

module.exports = updateCart;
