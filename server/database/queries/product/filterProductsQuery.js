const connection = require('../../config/connection');

const filterProductQuery = (props) => {
  const { title, category, minPrice, maxPrice } = props;
  console.log(props);
  return connection.query(
    `select * from products p INNER JOIN categories c ON p.category_id = c.id;`,
    [title, category, minPrice, maxPrice]
  ).catch(err => console.log("hahahaha"));
};

module.exports = filterProductQuery;
