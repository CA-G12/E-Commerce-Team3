const { addToCartQuery } = require('../../database/queries/cart');
const CustomizeError = require('../../utils/customError');

const addToCart = (req, res, next) => {
  const { userId, productId, count } = req.body;
  addToCartQuery({ userId, productId, count })
    .then((data) => res.json(data.rows))
    .catch((err) => next(new CustomizeError(500, err.message)));
};

module.exports = addToCart;
