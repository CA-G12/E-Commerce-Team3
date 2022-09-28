const connection = require('../../config/connection');

const addToCartQuery = ({ userId, productId, count }) =>
  connection.query(
    `INSERT INTO cart (user_id, product_id, count) VALUES ($1,$2,$3) returning *;`,
    [userId, productId, count]
  );

module.exports = addToCartQuery;
