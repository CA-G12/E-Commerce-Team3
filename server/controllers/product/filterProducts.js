const {filterProductQuery} = require('../../database/queries/product');

const filterProduct = (req, res, next) => {
  const { title, category, minPrice, maxPrice } = req.query;
  filterProductQuery({ title, category, minPrice, maxPrice })
    .then((data) => res.status(200).json(data.rows))
    .catch((err) => console.log("hahahaha"));
};

module.exports = filterProduct;
