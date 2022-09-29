const connection = require('../../config/connection');

const filterProductQuery = ({ title, category, minPrice, maxPrice }) =>
  connection.query(
    `select 
      p.id,
      p.title,
      p.description,
      p.price,
      p.image,
      p.category_id,
      c.name as category_name
      from products p INNER JOIN categories c ON p.category_id = c.id
      WHERE LOWER(p.title) like LOWER($1) AND LOWER(c.name) like LOWER($2) AND p.price > $3 AND p.price < $4;`,
    [`%${title}%`, `%${category}%`, minPrice, maxPrice]
  );

module.exports = filterProductQuery;
