const mongoose = require("mongoose");
const Exercise = require("../models/exercises.model");
const User = require("../models/users.model");


module.exports.create = (req, res, next) => {
    User.findById(req.user.id)
           .then((user) => {
        if (user) { 
            return Exercise.create({
                ...req.body,
                owner: req.user.id

            })
            .then((exercise) => {
                res.json(exercise);
            })

        } else {
            res.status(404).json({ message: "User not found" })

        }
    })
    .catch((err) => {
        if (err instanceof mongoose.Error.ValidationError) {
            res.status(400).json(err.errors);
        } else {
            next(err);
        }
    });
}


module.exports.list = (req, res, next) => {
    const { limit = 20, page = 0} = req.query;

   Exercise.find()
    .sort({_id: -1})
    .skip(page * limit)
    .limit(limit)
    .then((exercises) => res.json(exercises))
    .catch(next);
}

module.exports.detail = (req, res, next) => {
    Exercise.findById(req.params.id)
      .then((exercise) => {
        if (exercise) {
            res.json(exercise)
        } else {
            res.status(404).json({ message: "Exercise not found"})
        }
      })
      .catch(next);
}

module.exports.update = (req, res, next) => {
    Exercise.findByIdAndUpdate(req.params.id, req.body, {
        runValidators: true,
        new: true,
    })
      .then((exercise) => {
        if (exercise) {
            res.json(exercise);
        } else {
            res.status(404).json({ message: "Exercise not found" })
        }
      })
      .catch((err) => {
        if (err instanceof mongoose.Error.ValidationError) {
            res.status(400).json(err.errors);
        } else {
            next(err)
        }
      })
}

module.exports.delete = (req, res, next) => {
    Exercise.findByIdAndDelete(req.params.id)
      .then((exercise) => {
        if (exercise) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: "Exercise not found"})
        }
      })
      .catch(next);
};