const connection = require('../../config/connection');

const deleteFromCartQuery = ({ productId, userId }) =>
  connection.query(
    `delete from cart where product_id = $1 AND user_id = $2 returning *;`,
    [productId, userId]
  );

module.exports = deleteFromCartQuery;
