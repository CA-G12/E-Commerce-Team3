const connection = require('../../config/connection');

const getCartQuery = (id) =>
  connection.query(
    `select p.title, p.description, p.price, p.image, c.count from products p INNER JOIN cart c ON p.id = c.product_id WHERE c.user_id = $1;`,
    [id]
  );

module.exports = getCartQuery;
