const { Router } = require("express");
const movieRouter = require("./moviesRouter")

const router = Router();

router.use("/movies",movieRouter)

module.exports = router;