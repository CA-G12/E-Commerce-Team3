const { Pool } = require('pg');
require('dotenv').config();

const { DATABASE_URL, DEV_DB_URL, NODE_ENV } = process.env;

let DBUrl = '';
switch (NODE_ENV) {
  case 'production':
    DBUrl = DATABASE_URL;
    break;
  case 'development':
    DBUrl = DEV_DB_URL;
    break;

  case 'testing':
    DBUrl = DEV_DB_URL;
    break;

  default:
    throw new Error('undifind database url');
}

const connection = new Pool({
  connectionString: DBUrl,
  ssl:
    NODE_ENV === 'production'
      ? {
          rejectUnauthorized: false,
        }
      : false,
});

module.exports = connection;
