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

module.exports.isAdmin = (req, res, next) => {
    if (req.user?.isAdmin) {
        next();
    } else {
        next(createError(401));
    }
}

module.exports
