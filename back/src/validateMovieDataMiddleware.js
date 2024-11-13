// middlewares/validateMovieData.js

const validateMovieDataMiddleware = (req, res, next) => {
    const { title, year, director, duration, genre, rate, poster } = req.body;

    // Verificación de campos obligatorios
    if (!title || !year || !director || !duration || !genre || !rate || !poster) {
        return res.status(400).json({
            error: "Todos los campos son obligatorios: title, year, director, duration, genre, rate, poster"
        });
    }

    // Validaciones específicas
    if (typeof title !== 'string' || title.trim() === "") {
        return res.status(400).json({ error: "El título debe ser un texto no vacío" });
    }
    if (!/^\d{4}$/.test(year)) {
        return res.status(400).json({ error: "El año debe ser un número de 4 dígitos" });
    }
    if (typeof director !== 'string' || director.trim() === "") {
        return res.status(400).json({ error: "El director debe ser un texto no vacío" });
    }
    if (typeof duration !== 'string' || duration.trim() === "") {
        return res.status(400).json({ error: "La duración debe ser un texto no vacío" });
    }
    if (!Array.isArray(genre) || genre.length === 0) {
        return res.status(400).json({ error: "El género debe ser un array con al menos un elemento" });
    }
    if (typeof rate !== 'number' || rate < 0 || rate > 10) {
        return res.status(400).json({ error: "La calificación debe ser un número entre 0 y 10" });
    }
    if (typeof poster !== 'string' || poster.trim() === "") {
        return res.status(400).json({ error: "El poster debe ser un enlace no vacío" });
    }

    // Si todas las validaciones pasan, llama a `next()` para continuar al controlador
    next();
};

module.exports = validateMovieDataMiddleware;
