function buildMovie(movie) {
    // movie -> {title, year, director, duration, genre, rate, poster}

    const { title, year, director, duration, genre, rate, poster } = movie;

    // Crear los elementos
    const titleElement = document.createElement("h3");
    const yearElement = document.createElement("h4");
    const directorElement = document.createElement("h4");
    const durationElement = document.createElement("p");
    const genreElement = document.createElement("p");
    const rateElement = document.createElement("p");
    const posterElement = document.createElement("img");

    // Asignar contenido
    titleElement.textContent = title;
    directorElement.textContent = director;
    durationElement.textContent = duration;
    yearElement.textContent = year;
    genreElement.textContent = genre.join(" "); // "Action Adventure Comedy"
    rateElement.textContent = rate;
    posterElement.src = poster;
    posterElement.alt = `Poster of ${title}`;

    // Asignar clases a los elementos
    titleElement.className = "title";
    directorElement.className = "director";
    durationElement.className = "duration";
    yearElement.className = "year";
    genreElement.className = "genre";
    rateElement.className = "rate";
    posterElement.className = "poster";

    // Crear cardFront y cardBack
    const cardFront = document.createElement("div");
    const cardBack = document.createElement("div");

    // Asignar clases a cardFront y cardBack
    cardFront.className = "card-front";
    cardBack.className = "card-back";

    // Agregar la imagen al frente de la tarjeta
    cardFront.appendChild(posterElement);

    // Agregar los detalles al reverso de la tarjeta
    cardBack.appendChild(titleElement);
    cardBack.appendChild(directorElement);
    cardBack.appendChild(genreElement);
    cardBack.appendChild(yearElement);
    cardBack.appendChild(durationElement);
    cardBack.appendChild(rateElement);

    // Crear el contenedor de la tarjeta
    const cardContainer = document.createElement("div");
    cardContainer.className = "card-container";

    // Agregar cardFront y cardBack al contenedor
    cardContainer.appendChild(cardFront);
    cardContainer.appendChild(cardBack);

    return cardContainer;
}

module.exports = buildMovie;