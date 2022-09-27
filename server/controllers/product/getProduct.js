const { getProductQuery } = require('../../database/queries/product');
const CustomizeError = require('../../utils/customError');

const getProduct = (req, res, next) => {
  const { id } = req.params;
  getProductQuery(id)
    .then((data) => res.json(data.rows))
    .catch((err) => next(new CustomizeError(500, err.message)));
};

module.exports = getProduct;
