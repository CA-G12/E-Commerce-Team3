const { filterProductQuery } = require('../../database/queries/product');
const CustomizeError = require('../../utils/customError');

const filterProduct = (req, res, next) => {
  const { title = '', category = '', minPrice = 0, maxPrice = 200 } = req.query;
  filterProductQuery({ title, category, minPrice, maxPrice })
    .then((data) => {
      res.json(data.rows);
    })
    .catch((err) => next(new CustomizeError(500, err.message)));
};

module.exports = filterProduct;
