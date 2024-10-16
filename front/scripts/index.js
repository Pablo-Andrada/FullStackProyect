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

    h3.innerHTML = title;
    p.innerHTML = description;
    img.src = imgUrl;
    //?agregarle los estilos
    p.class = "description";
    img.class = "activity-image";
    const div = document.createElement("div");
    div.appendChild(h3);
    div.appendChild(p);
    div.appendChild(img);
    div.class = "activity";
    div.id = id;
    return div;
}