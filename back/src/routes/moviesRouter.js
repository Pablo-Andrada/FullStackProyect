const { Router } = require("express");
const movieController = require("../controllers/movieController")
const validateMovieDataMiddleware = require("../validateMovieDataMiddleware");

const movieRouter = Router();

movieRouter.get("/", movieController.getAllMovies);
movieRouter.post("/",validateMovieDataMiddleware, movieController.crateMovie);

module.exports = movieRouter;