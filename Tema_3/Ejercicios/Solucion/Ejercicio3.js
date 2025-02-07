// Seleccionamos el contenedor de películas
const moviesContainer = document.getElementById('movies');

// Buscamos el primer elemento con la clase "movie"
const firstMovieToRemove = moviesContainer.querySelector('.movie');

// Si existe, lo eliminamos
if (firstMovieToRemove) {
    moviesContainer.removeChild(firstMovieToRemove);
    console.log("Primera película eliminada.");
} else {
    console.log("No se encontró ninguna película para eliminar.");
}
