const { addToCartQuery } = require('../../database/queries/cart');

const addToCart = (req, res) => {
  console.log('hr');
  const { userId, productId, count } = req.body;
  console.log(userId, productId, count);
  addToCartQuery({ userId, productId, count })
    .then((data) => res.json(data.rows))
    .then((data) => console.log(data));
};

module.exports = addToCart;
