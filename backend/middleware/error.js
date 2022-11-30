const ErrorHandler = require("../utils/errorhandler");


module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "internal server error";

    // Wrong MongoDB ID error
    if(err.name === 'CastError'){
        const message = `Resource not found. Invaid: ${err.path}`;
        err = new ErrorHandler(message, 400);
    }

    res.status(err.statusCode).json({
        success: false,
        message: err.message
    });
};