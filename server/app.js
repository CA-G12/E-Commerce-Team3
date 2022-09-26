const express = require('express');
const compression = require('compression');
const cookieParser = require('cookie-parser');

require('dotenv').config();

const app = express();

app.set('port', process.env.PORT || 8080);
app.disable('x-powered-by');
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(compression());

module.exports = app;
