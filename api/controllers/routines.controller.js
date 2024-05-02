const mongoose = require("mongoose");
const Routine = require("../models/routines.model");

module.exports.create = (req, res, next) => {
    Routine.create(req.body)
    .then((routine) => res.status(201).json(routine))
}