const { getCartQuery } = require('../../database/queries/cart');

const getCart = (req, res) => {
  const { userId } = req.params;
  getCartQuery(userId)
    .then((data) => res.json(data.rows))
    .then((data) => console.log(data));
};

module.exports = getCart;
