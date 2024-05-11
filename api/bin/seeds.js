require('dotenv').config();

const mongoose = require('mongoose');
const Routine = require('../models/routines.model');
const Exercise = require('../models/exercises.model');
const exercisesData = require('../data/exercises.json');
const routinesData = require('../data/routines.json'); 

require('../configs/db.config');

mongoose.connection.once('open', async () => {
  console.info(`Successfully connected to the database ${mongoose.connection.db.databaseName}`);

  try {

    await mongoose.connection.db.dropCollection('routines');
    console.info('Dropped routines collection');
    const createdRoutines = await Routine.create(routinesData);
    console.info(`- ${createdRoutines.length} routines created`);
  } catch (error) {
    console.error(error);
  } finally {
    mongoose.connection.close();
    console.info('Connection to database closed');
    process.exit(0);

  }
})