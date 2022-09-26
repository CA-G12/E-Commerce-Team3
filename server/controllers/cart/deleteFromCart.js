const { deleteFromCartQuery } = require('../../database/queries/cart');

const deleteFromCart = (req, res) => {
  const { userId, productId } = req.body;
  deleteFromCartQuery({ userId, productId })
    .then((data) => res.json(data.rows))
    .then((data) => console.log(data));
};

module.exports = deleteFromCart;
