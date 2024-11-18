const axios = require("axios");

const carouselTrack = document.querySelector(".carousel-track");
const prevButton = document.querySelector(".carousel-button.prev");
const nextButton = document.querySelector(".carousel-button.next");
let currentSlide = 0;

// Función para crear dinámicamente las películas
function createMovieCard(movie) {
    const movieCard = document.createElement("div");
    movieCard.classList.add("carousel-item");

    movieCard.innerHTML = `
        <img src="${movie.poster}" alt="Poster of ${movie.title}">
        <h3>${movie.title}</h3>
        <p>${movie.year}</p>
    `;

    return movieCard;
}

// Función para cargar las películas dinámicamente
async function populateCarousel() {
    try {
        const response = await axios.get("http://localhost:3000/movies"); // Cambia la URL según tu API
        const movies = response.data;

        // Rellenar el carrusel con las películas
        const carouselMovies = document.getElementById("carouselMovies");
        movies.forEach(movie => {
            const movieCard = createMovieCard(movie);
            carouselMovies.appendChild(movieCard);
        });

        // Ajustar el carrusel después de cargar las películas
        updateCarousel();
    } catch (error) {
        console.error("Error loading movies:", error);
    }
}

// Función para actualizar el estado del carrusel
function updateCarousel() {
    const slideWidth = carouselTrack.querySelector(".carousel-item").offsetWidth;
    carouselTrack.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

// Event Listeners para los botones del carrusel
prevButton.addEventListener("click", () => {
    currentSlide = Math.max(currentSlide - 1, 0);
    updateCarousel();
});

nextButton.addEventListener("click", () => {
    const totalSlides = carouselTrack.querySelectorAll(".carousel-item").length;
    currentSlide = Math.min(currentSlide + 1, totalSlides - 3);
    updateCarousel();
});

// Inicializar la carga dinámica
document.addEventListener("DOMContentLoaded", populateCarousel);
