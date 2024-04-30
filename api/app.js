require('dotenv').config();

const express = require('express');
const logger = require('morgan');

require('./configs/db.config');

const app = express();

app.use(logger('dev'));

//Routes
const router = require("./configs/routes.config");
app.use("/v1/api", router);

//Error handlers

app.use((req, res, next) => {
    res.status(404).json({message: 'Route not found'})
});

app.use((err, req, res, next) => {
    console.error(err);
    
    res.status(500).json({message:"Interval Server Error"});
})

const port = process.env.PORT || 3000;

app.listen(port, () => console.info(`Application running at port ${port}`));