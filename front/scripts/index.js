document.addEventListener("DOMContentLoaded", () => {
    const cardsContainer = document.getElementById("cardsContainer");
    console.log(cardsContainer);    
})

function buildMovie(movie) {
    // movie -> {title,year,director,duration,genre,rate,poster}

    const { title,year,director,duration,genre,rate,poster } = movie;
    const titleElement = document.createElement("h3");
    const yearElement = document.createElement("h4");
    const directorElement = document.createElement("h4");
    const durationElement = document.createElement("p");
    const genreElement = document.createElement("p");
    const rateElement = document.createElement("p");
    const posterElement = document.createElement("img");

    titleElement.textContent = title;
    directorElement.textContent = director;
    durationElement.textContent = duration;
    yearElement.textContent = year;
    genreElement.textContent = genre.join(" ") // "Action Adventure Comedy"
    rateElement.textContent = rate;
    posterElement.src = poster;
    posterElement.alt = `Poster of ${title}`;

    /* FALTA DAR ESTILOS A title por ejemplo
    titleElement.class = title
    */
    cardFront.class = "card-front";
    cardBack.class = "card-back";

    
    cardFront.appendChild(posterElement);
    cardBack.appendChild(titleElement);
    cardBack.appendChild(directorElement);
    cardBack.appendChild(genreElement);
    cardBack.appendChild(yearElement);
    cardBack.appendChild(durationElement);
    cardBack.appendChild(rateElement);

    const cardContainer = document.createElement("div");

    cardContainer.class = cardContainer;

    cardContainer.appendChild(cardFront);
    cardContainer.appendChild(cardBack);

 
}