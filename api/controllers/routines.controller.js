const mongoose = require("mongoose");
const Routine = require("../models/routines.model");

module.exports.create = (req, res, next) => {
    Routine.create(req.body)
    .then((routine) => res.status(201).json(routine))
    .catch((err) => {
        if (err instanceof mongoose.Error.ValidationError) {
            res.status(400).json(err.errors);
        } else {
            next(err);
        }
    })
}

module.exports.list =  (req, res, next) => {
    const { routineType, difficulty, equipmentNecessary, limit = 10, page = 0} = req.query;
    const criteria = {};
    if (routineType) criteria.routineType = routineType;
    if (difficulty) criteria.difficulty = difficulty;
    if (equipmentNecessary) criteria.equipmentNecessary = equipmentNecessary;

    Routine.find(criteria)
        .sort({ _id: -1})
        .skip(page * limit)
        .limit(limit)
        .then((routines) => res.json(routines))
        .catch(next);
};