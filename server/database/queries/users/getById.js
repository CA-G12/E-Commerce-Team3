const connection = require('../../config/connection');

module.exports = (id) => {
  connection.query(
    'SELECT name, email, password, avatar FROM users WHERE id = $1 ',
    [id]
  );
};
