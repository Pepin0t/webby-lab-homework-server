module.exports = (err, req, res, next) => {
    const error = {
        ok: false,
        message: err.message || "Server Error",
        status: err.status || 500
    };

    res.status(error.status).send(error);
};
