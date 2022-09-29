const connection = require('../../config/connection');

const getCategories = () => connection.query('select * from categories;');

module.exports = getCategories;
