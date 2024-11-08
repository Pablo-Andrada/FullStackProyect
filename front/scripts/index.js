const buildMovie = require("./buildMovie");

document.addEventListener("DOMContentLoaded", () => {
    const cardsContainer = document.getElementById("cardsContainer");
    $.get("https://students-api.up.railway.app/movies", (data) => {
  
        const moviesHTMLs = data.map((movie) => buildMovie(movie));
        moviesHTMLs.forEach((movie) => cardsContainer.appendChild(movie));
      })
});



function buildMovies() {

  
}


//Funcionalidad al title al cambiar la pestaña

let previousTitle = document.title;

window.addEventListener('blur', () => {
    previousTitle = document.title
    document.title = '¡No te vayas! ¡Vuelve!'
})

window.addEventListener('focus', () => {
    document.title = previousTitle;
})


//students-api.up.railway.app/movies

const container = $("cardsContainer");
console.log(container);
