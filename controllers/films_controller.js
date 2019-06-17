const db = require("../services/db");

module.exports = {
    getListOfFilms: function(req, res, next) {
        db.getListOfFilms((err, data) => {
            if (!err) {
                res.send(data);
            } else {
                next({ message: err.message });
            }
        });
    },

    addFilm: function(req, res, next) {
        db.addFilm((err, data) => {
            if (!err) {
                res.send(data);
            } else {
                next({ message: err.message });
            }
        }, req.body);
    },

    deleteFilm: function(req, res, next) {
        db.deleteFilm((err, data) => {
            if (!err) {
                res.send(data);
            } else {
                next({ message: err.message });
            }
        }, req.body);
    }
};
