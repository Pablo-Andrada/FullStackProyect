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
    crateMovie: async (req, res) => {
        try {
            const { title, year, director, duration, genre, rate, poster } = req.body;
            const newMovie = await movieService.createMovie({ title, year, director, duration, genre, rate, poster });
            res.status(201).json({message: "Pelicula creada con éxito"})
        } catch (error) {
            res.status(500).json({
                error:"Error al crear la película"
            })
        }
    },
    deleteMovie: async (req, res) => {
        try {
            const { title } = req.params;  // Usamos params para obtener el título de la URL
            const deletedMovie = await movieService.deleteMovieByName(title);
            res.status(200).json({ message: "Pelicula eliminada con éxito", movie: deletedMovie });
        } catch (error) {
            res.status(500).json({ error: "Error al eliminar la película" });
        }
    }

}