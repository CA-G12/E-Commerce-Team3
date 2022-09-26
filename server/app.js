const express = require('express');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const { handleClientError, handleServerError } = require('./middlewares/error');

require('dotenv').config();
const router = require('./routes');

const app = express();
app.use(router);
app.set('port', process.env.PORT || 8080);
app.disable('x-powered-by');
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(compression());

// handling errors
// app.use(handleClientError, handleServerError);

module.exports = app;
