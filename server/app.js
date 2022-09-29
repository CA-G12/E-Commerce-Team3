const express = require('express');
const { join } = require('path');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const { handleClientError, handleServerError } = require('./middlewares/error');

require('dotenv').config();
const { productRouter, userRouter } = require('./routes');

// Middlewares
const app = express();
app.set('port', process.env.PORT || 8080);
app.disable('x-powered-by');
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(compression());
app.use(express.static(join(__dirname, '..', 'client', 'build')));

// Routers
app.use(productRouter);
app.use(userRouter);

// handling errors
app.use(handleClientError, handleServerError);

module.exports = app;
