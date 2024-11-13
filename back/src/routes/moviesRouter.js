const { Router } = require("express");
const movieController = require("../controllers/movieController")
const validateMovieDataMiddleware = require("../validateMovieDataMiddleware");

const movieRouter = Router();

movieRouter.get("/", movieController.getAllMovies);
movieRouter.post("/", validateMovieDataMiddleware, movieController.crateMovie);
// Ruta para eliminar una película por su nombre
movieRouter.delete("/:title", movieController.deleteMovie);

module.exports = movieRouter;