const mongoose = require("mongoose");
const User = require('../models/users.model');
const Routine = require("../models/routines.model");
const Subscription = require("../models/subscriptions.model");

module.exports.follow = async (req, res) => {
    try {
        const { routine } = req.body;
        const existingSub = await Subscription.findOne({ subscriber: req.user.id, routine });

        if (existingSub) {
            return res.status(400).json({ message: "Already subscribed to this routine" });
        }

        const newSub = new Subscription({ subscriber: req.user.id, routine });
        const savedSub = await newSub.save();
        res.status(201).json(savedSub);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports.unfollow = async (req, res) => {
    try {
        const { routineId } = req.params;
        const userId = req.user.id;

        const subscription = await Subscription.findOneAndDelete({ subscriber: userId, routine: routineId });

        if (!subscription) {
            return res.status(404).json({ message: "Subscription not found" });
        }

        res.status(200).json({ message: "Unsubscribed successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports.showMySubscriptions = (req, res, next) => {
    const userId = req.user.id;
    Subscription.find({ subscriber: userId })
        .populate('routine')
        .then(subscriptions => {
            const routines = subscriptions.map(sub => sub.routine).filter(routine => routine);
            res.status(200).json(routines);
        })
        .catch(error => {
            res.status(500).json({ error: error.message });
        });
}

module.exports.checkSubscription = async (req, res) => {
    try {
        const { routineId } = req.params;
        const userId = req.user.id;
        const subscription = await Subscription.findOne({ subscriber: userId, routine: routineId });

        if (!subscription) {
            return res.status(200).json({ isSubscribed: false });
        }

        res.status(200).json({ isSubscribed: true });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
