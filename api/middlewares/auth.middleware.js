const createError = require("http-errors");
const jwt = require('jsonwebtoken');

const User = require('../models/users.model');

module.exports.checkAuth = (req, res, next) => {
    const [schema, token] = req.headers?.authorization.split(' ');
    switch (schema.toUpperCase()) {
        case 'BEARER':
            jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
                if (err) {
                    return res.status(401).json({ message: err.message });
                }

                const sub = decoded.sub;

                User.findById(sub)
                  .populate("subscriptions")
                  .then((user) => {
                    if (user) {
                        req.user = user;
                        next();
                    } else {
                        res.status(401).json({ message: "Unauthorized"})
                    }
                  })
                  .catch(next)
            });
            break;
        default:
            res.status(401).json({ message: `Unsupported authorization schema ${schema}` });
    }

};

module.exports.checkRole = (role) => {
    return (req, res, next) => {
        const user = req.user;
        if (user && user.role === role) {
            next();
        } else {
            res.status(403).json({ message: 'Acceso prohibido'})
        }
    }
}

