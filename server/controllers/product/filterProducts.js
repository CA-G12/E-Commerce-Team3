const { filterProductQuery } = require('../../database/queries/product');

const filterProduct = (req, res, next) => {
  // console.log(req.query);
  const { title = '', category = '', minPrice = 0, maxPrice = 200 } = req.query;
  filterProductQuery({ title, category, minPrice, maxPrice })
    .then((data) => {
      console.log(data);
      res.json(data.rows);
    })
    .catch((err) => next(err));
};

module.exports = filterProduct;
