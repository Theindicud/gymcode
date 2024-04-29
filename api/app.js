require('dotenv').config();

const express = require('express');
const logger = require('morgan');

require('./configs/db.config');

const app = express();

app.use(logger('dev'));

//Routes
const router = require("./configs/routes.config");



const port = process.env.PORT || 3001;

app.listen(port, () => console.info(`Application running at port ${port}`));