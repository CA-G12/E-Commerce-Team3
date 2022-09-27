const { deleteFromCartQuery } = require('../../database/queries/cart');
const CustomizeError = require('../../utils/customError');

const deleteFromCart = (req, res, next) => {
  const { userId, productId } = req.body;
  deleteFromCartQuery({ userId, productId })
    .then((data) => res.json(data.rows))
    .catch((err) => next(new CustomizeError(500, err.message)));
};

module.exports = deleteFromCart;
