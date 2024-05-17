const mongoose = require("mongoose");
const User = require('../models/users.model');
const Routine = require("../models/routines.model");
const Subscription = require("../models/subscriptions.model");

module.exports.follow = async (req, res) => {
    try {
        const { routine } = req.body;
        const newSub = new Subscription({ subscriber: req.user.id, routine });
        const savedSub = await newSub.save();
        res.status(201).json(savedSub)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}