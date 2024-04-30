const createError = require("http-errors");

module.exports.isAdmin = (req, res, next) => {
    if (req.user?.isAdmin) {
        next();
    } else {
        next(createError(401));
    }
}
