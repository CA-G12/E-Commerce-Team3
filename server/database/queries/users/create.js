const connection = require('../../config/connection');

module.exports = (name, email, password, avatar) =>
  connection.query(
    'INSERT INTO users(name, email, password, avatar) VALUES($1,$2,$3,$4)',
    [name, email, password, avatar]
  );
