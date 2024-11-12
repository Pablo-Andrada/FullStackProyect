const axios = require("axios");

const buildMovie = require("./buildMovie");
console.log("Script cargado");


document.addEventListener("DOMContentLoaded", async () => {
    const cardsContainer = document.getElementById("cardsContainer");
// acá cambio el jQuery por asyn await:
    try {
        const response = await axios.get("http://localhost:3000/movies");
        console.log("Response data:", response.data); // Asegúrate de que esta línea imprima el array completo de películas.
        const moviesHTMLs = response.data.map((movie) => buildMovie(movie));
        moviesHTMLs.forEach((movie) => cardsContainer.appendChild(movie))
    } catch (error) {
        console.error("Error fetching movies:", error);
    }
    
    
    // $.get("https://students-api.up.railway.app/movies", (data) => {
  
    //     const moviesHTMLs = data.map((movie) => buildMovie(movie));
    //     moviesHTMLs.forEach((movie) => cardsContainer.appendChild(movie));
    //   })
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
