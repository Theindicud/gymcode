const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/gymcode';

mongoose
    .connect(MONGODB_URI)
    .then(() => console.info(`Successfully connected to the database ${MONGODB_URI}`))
    .catch((error) => console.error(`Error to connect to the database: ${MONGODB_URI}`, error))