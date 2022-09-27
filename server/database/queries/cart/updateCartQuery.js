const connection = require('../../config/connection');

const updateCartQuery = ({ productId, userId, count }) =>
  connection.query(
    `update cart set count = $3 where product_id = $1 AND user_id = $2 returning *;`,
    [productId, userId, count]
  );

module.exports = updateCartQuery;
