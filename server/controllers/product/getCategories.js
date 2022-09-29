const { getCategoriesQuery } = require('../../database/queries/product');
const CustomizeError = require('../../utils/customError');

const getCategories = (req, res, next) => {
  getCategoriesQuery()
    .then((data) => res.json(data.rows))
    .catch((err) => next(new CustomizeError(500, err.message)));
};

module.exports = getCategories;
