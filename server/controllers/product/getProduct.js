const getProductQuery = require('../../database/queries/product/getProductQuery');

const getProduct = (req, res) => {
  const { id } = req.params;
  getProductQuery(id)
    .then((data) => res.json(data.rows))
    .then((data) => console.log(data));
};

module.exports = getProduct;
