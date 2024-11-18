const carouselTrack = document.querySelector(".carousel-track");
const prevButton = document.querySelector(".carousel-button.prev");
const nextButton = document.querySelector(".carousel-button.next");

let currentSlide = 0;

function updateCarousel() {
    const slideWidth = carouselTrack.querySelector(".carousel-item").offsetWidth;
    carouselTrack.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

prevButton.addEventListener("click", () => {
    currentSlide = Math.max(currentSlide - 1, 0);
    updateCarousel();
});

nextButton.addEventListener("click", () => {
    const totalSlides = carouselTrack.querySelectorAll(".carousel-item").length;
    currentSlide = Math.min(currentSlide + 1, totalSlides - 3);
    updateCarousel();
});
