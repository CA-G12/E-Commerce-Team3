const { updateCartQuery } = require('../../database/queries/cart');

const updateCart = (req, res) => {
  const { userId, productId, count } = req.body;
  updateCartQuery({ userId, productId, count })
    .then((data) => res.json(data.rows))
    .then((data) => console.log(data));
};

module.exports = updateCart;
