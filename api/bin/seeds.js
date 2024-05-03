require('dotenv').config();

const mongoose = require('mongoose');
const Exercise = require('../models/exercises.model');
const exercisesData = require('..data/exercises.json');

require('../configs/db.config');

mongoose.connection.once('open', () => {
    console.info(`Successfully connected to the database ${mongoose.connection.db.databaseName}`);
    mongoose.connection.db.dropCollection('exercises')
      .then(() => {
        console.info('Dropped exercises collection');
        return Exercise.create(exercisesData);
      })
      .then((exercises) => console.info(`- ${exercises.length} exercises created`))
      .catch((error) => console.error(error))
      .finally(() => process.exit(0))
  });