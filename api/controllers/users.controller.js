const User = require('../models/user.model');
const mongoose = require('mongoose');
const { v4: uuidv4 } = require("uuid");

module.exports.register = (req, res, next) => {
    User.create(req.body) 
    .then((user) => {
        res.json(user);
    })
    .catch((err) => {
        if (err instanceof mongoose.Error.ValidationError) {
            res.status(400).json(err.errors);
        } else {
            next(err);
        }
    });
};

const sessions = [];

module.exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email })
        .then((user) => {
            if (user) {
                user.checkPassword(req.body.password)
                    .then((match) => {
                        if (match) {
                            const sessionId = uuidv4();
                            sessions.push({ userId: user.id, sessionId });
                            res.set("Set-Cookie", `sessionId=${sessionId}`);
                            res.send();
                        } else {
                            res.status(401).json({ message: "invalid password" });
                        }
                    })
                    .catch(next);
            } else {
                res.status(401).json({ message: "invalid email" });
            }
        })
        .catch(next);
};

