const mongoose = require("mongoose");
const Routine = require("../models/routines.model");
const Exercise = require("../models/exercises.model");

module.exports.create = (req, res, next) => {
    const exerciseIDs = req.body.exercises.map(e => e.exercise);

    Exercise.find({ _id: { $in: exerciseIDs } })
        .then((exercises) => {
            if (exerciseIDs.every((id) => exercises.some((exercise) => id == exercise.id))) {
                return Routine.create(req.body)
                    .then((routine) => res.status(200).json(routine))
                    .catch(next);
            } else {
                res.status(404).json({ message: "Ejercicios no encontrados" });
            }
        })
        .catch((err) => {
            if (err instanceof mongoose.Error.ValidationError) {
                res.status(400).json(err.errors);
            } else {
                next(err);
            }
        });
};


module.exports.list = (req, res, next) => {
    const { routineType, difficulty, equipmentNecessary, limit = 10, page = 0 } = req.query;
    const criteria = {};
    if (routineType) criteria.routineType = routineType;
    if (difficulty) criteria.difficulty = difficulty;
    if (equipmentNecessary) criteria.equipmentNecessary = equipmentNecessary;

    Routine.find(criteria)
        .populate("exercises.exercise")
        .populate("owner")
        .sort({ _id: -1 })
        .skip(page * limit)
        .limit(limit)
        .then((routines) => res.json(routines))
        .catch(next);
};

module.exports.update = (req, res, next) => {
    Routine.findByIdAndUpdate(req.params.id, req.body, {
        runValidators: true,
        new: true,
    })
      .then((routine) => {
        if (routine) {
            res.json(routine);
        } else {
            res.status(404).json({ message: "Rutina no encontrada" });
        }
      })
      .catch((err) => {
        if (err instanceof mongoose.Error.ValidationError) {
            res.status(400).json(err.errors)
        } else {
            next(err)
        }
      });
}

module.exports.detail = (req, res, next) => {
    Routine.findById(req.params.id)
      .populate("exercises.exercise")
      .populate("owner")     
      .then((routine) => {
        if (routine) {
            res.json(routine)
        } else {
            res.status(404).json({ message: "Rutina no encontrada"})
        }
      })
      .catch(next)
}

module.exports.delete = (req, res, next) => {
    Routine.findByIdAndDelete(req.params.id)
        .then((routine) => {
            if (routine) {
                res.status(204).send();
            } else {
                res.status(404).json({ message: "Rutina no encontrada"})
            }
        })
        .catch(next);
}