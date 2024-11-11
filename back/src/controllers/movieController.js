const movieService = require("../services/movieService")

module.exports = {
    getAllMovies: async (req, res) => {
        try {
            const movies = await movieService.getAllMovies();
            res.status(200).json(movies);
        } catch (error) {
            res.status(500).json({
                error:"Error al cargar movies en el servidor"
            })
        }


    },
}