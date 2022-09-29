const connection = require('../../config/connection');

module.exports = (email) =>
  connection.query(
    'SELECT name, email, password, avatar FROM users WHERE email = $1;',
    [email]
  );
