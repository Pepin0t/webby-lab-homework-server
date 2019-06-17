const Film = require("../models/film");

const db = {
    getListOfFilms: async function(controller) {
        try {
            const films = await Film.find();

            controller(null, { ok: true, data: films });
        } catch (error) {
            controller(error);
        }
    },

    addFilm: async function(controller, { data }) {
        try {
            const films = await Film.create(data);
            let result;

            if (Array.isArray(films)) {
                result = films;
            } else {
                result = [films];
            }

            result = result.map(film => {
                const { ID, title, release, format, stars } = film;
                return { ID, title, release, format, stars };
            });

            controller(null, { ok: true, message: "Success!", data: result });
        } catch (error) {
            const err = { message: "Server error. Try again." };

            controller(err);
        }
    },

    deleteFilm: async function(controller, { ID }) {
        try {
            await Film.deleteOne({ ID });

            controller(null, { ok: true, data: { ID } });
        } catch (error) {
            controller(error);
        }
    }
};

module.exports = db;
