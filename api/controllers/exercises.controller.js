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

