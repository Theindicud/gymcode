require('dotenv').config();

const mongoose = require('mongoose');
const Exercise = require('../models/exercises.model');
const Routine = require('../models/routines.model');
const exercisesData = require('../data/exercises.json');
const routinesData = require('../data/routines.json'); 

require('../configs/db.config');

mongoose.connection.once('open', async () => {
  console.info(`Successfully connected to the database ${mongoose.connection.db.databaseName}`);

  try {
    await mongoose.connection.db.dropCollection('exercises');
    console.info('Dropped exercises collection');
    const createdExercises = await Exercise.create(exercisesData);
    console.info(`- ${createdExercises.length} exercises created`);

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