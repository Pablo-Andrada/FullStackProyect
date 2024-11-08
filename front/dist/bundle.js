/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/buildMovie.js":
/*!*******************************!*\
  !*** ./scripts/buildMovie.js ***!
  \*******************************/
/***/ ((module) => {

eval("function buildMovie(movie) {\r\n    // movie -> {title, year, director, duration, genre, rate, poster}\r\n\r\n    const { title, year, director, duration, genre, rate, poster } = movie;\r\n\r\n    // Crear los elementos\r\n    const titleElement = document.createElement(\"h3\");\r\n    const yearElement = document.createElement(\"h4\");\r\n    const directorElement = document.createElement(\"h4\");\r\n    const durationElement = document.createElement(\"p\");\r\n    const genreElement = document.createElement(\"p\");\r\n    const rateElement = document.createElement(\"p\");\r\n    const posterElement = document.createElement(\"img\");\r\n\r\n    // Asignar contenido\r\n    titleElement.textContent = title;\r\n    directorElement.textContent = director;\r\n    durationElement.textContent = duration;\r\n    yearElement.textContent = year;\r\n    genreElement.textContent = genre.join(\" \"); // \"Action Adventure Comedy\"\r\n    rateElement.textContent = rate;\r\n    posterElement.src = poster;\r\n    posterElement.alt = `Poster of ${title}`;\r\n\r\n    // Asignar clases a los elementos\r\n    titleElement.className = \"title\";\r\n    directorElement.className = \"director\";\r\n    durationElement.className = \"duration\";\r\n    yearElement.className = \"year\";\r\n    genreElement.className = \"genre\";\r\n    rateElement.className = \"rate\";\r\n    posterElement.className = \"poster\";\r\n\r\n    // Crear cardFront y cardBack\r\n    const cardFront = document.createElement(\"div\");\r\n    const cardBack = document.createElement(\"div\");\r\n\r\n    // Asignar clases a cardFront y cardBack\r\n    cardFront.className = \"card-front\";\r\n    cardBack.className = \"card-back\";\r\n\r\n    // Agregar la imagen al frente de la tarjeta\r\n    cardFront.appendChild(posterElement);\r\n\r\n    // Agregar los detalles al reverso de la tarjeta\r\n    cardBack.appendChild(titleElement);\r\n    cardBack.appendChild(directorElement);\r\n    cardBack.appendChild(genreElement);\r\n    cardBack.appendChild(yearElement);\r\n    cardBack.appendChild(durationElement);\r\n    cardBack.appendChild(rateElement);\r\n\r\n    // Crear el contenedor de la tarjeta\r\n    const cardContainer = document.createElement(\"div\");\r\n    cardContainer.className = \"card-container\";\r\n\r\n    // Agregar cardFront y cardBack al contenedor\r\n    cardContainer.appendChild(cardFront);\r\n    cardContainer.appendChild(cardBack);\r\n\r\n    return cardContainer;\r\n}\r\n\r\nmodule.exports = buildMovie;\n\n//# sourceURL=webpack://front/./scripts/buildMovie.js?");

/***/ }),

/***/ "./scripts/index.js":
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const buildMovie = __webpack_require__(/*! ./buildMovie */ \"./scripts/buildMovie.js\");\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n    const cardsContainer = document.getElementById(\"cardsContainer\");\r\n    $.get(\"https://students-api.up.railway.app/movies\", (data) => {\r\n  \r\n        const moviesHTMLs = data.map((movie) => buildMovie(movie));\r\n        moviesHTMLs.forEach((movie) => cardsContainer.appendChild(movie));\r\n      })\r\n});\r\n\r\n\r\n\r\nfunction buildMovies() {\r\n\r\n  \r\n}\r\n\r\n\r\n//Funcionalidad al title al cambiar la pestaña\r\n\r\nlet previousTitle = document.title;\r\n\r\nwindow.addEventListener('blur', () => {\r\n    previousTitle = document.title\r\n    document.title = '¡No te vayas! ¡Vuelve!'\r\n})\r\n\r\nwindow.addEventListener('focus', () => {\r\n    document.title = previousTitle;\r\n})\r\n\r\n\r\n//students-api.up.railway.app/movies\r\n\r\nconst container = $(\"cardsContainer\");\r\nconsole.log(container);\r\n\n\n//# sourceURL=webpack://front/./scripts/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/index.js");
/******/ 	
/******/ })()
;