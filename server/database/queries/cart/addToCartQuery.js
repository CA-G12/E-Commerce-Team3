const connection = require('../../config/connection');

const addToCartQuery = ({ userId, productId, count }) =>
  connection
    .query('SELECT * FROM cart WHERE product_id=$1 AND user_id=$2;', [
      productId,
      userId,
    ])
    .then((data) => {
      const oldCount = data.rows ? data.rowCount && data.rows[0].count : 0;
      return connection.query(
        'INSERT INTO cart (user_id, product_id, count) values ($1,$2,$3) ON CONFLICT (user_id, product_id) DO UPDATE SET count = $4 RETURNING *',
        [userId, productId, count, +oldCount + count]
      );
    });

module.exports = addToCartQuery;
