const connection = require('../../config/connection');

const getProductQuery = (id) =>
  connection.query('select * from products where id = $1', [id]);

module.exports = getProductQuery;
