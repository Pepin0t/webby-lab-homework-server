const express = require("express");
const router = express.Router();

const filmsController = require("../controllers/films_controller");

router.get("/get-list-of-films", filmsController.getListOfFilms);
router.post("/add-film", filmsController.addFilm);
router.delete("/delete-film", filmsController.deleteFilm);

module.exports = router;
