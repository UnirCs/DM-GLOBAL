// a) Número total de películas
const movies = document.getElementsByClassName('movie');
console.log("Total de películas:", movies.length);

// b) Nombre del director de la segunda película
const secondMovie = movies[1];
const directorText = secondMovie.querySelector('p:nth-of-type(1)').textContent;
console.log("Director de la segunda película:", directorText);

// c) Listar todas las sesiones de la tercera película
const thirdMovie = movies[2];
const sessions = thirdMovie.getElementsByClassName('session-btn');
const sessionTimes = Array.from(sessions).map(btn => btn.textContent);
console.log("Sesiones de la tercera película:", sessionTimes);

// d) Primer botón de sesión de la primera película
const firstMovie = movies[0];
const firstSessionBtn = firstMovie.getElementsByClassName('session-btn')[0];
console.log("Primer botón de sesión de la primera película:", firstSessionBtn);
