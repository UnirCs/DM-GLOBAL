const tituloElemento = document.getElementById("titulo");
console.log(tituloElemento);

const articulos = document.getElementsByTagName("article");
console.log(articulos);

const peliculas = document.getElementsByClassName("pelicula");
console.log(peliculas);

const botonesSeleccionar = document.getElementsByClassName("btnSeleccionar");
console.log(botonesSeleccionar);

const seccionPeliculas = document.querySelector("section#peliculas");
console.log(seccionPeliculas);

// Datos de la película predefinida para añadir
const nuevaPeliculaData = {
    titulo: "Ciencia Ficción Espacial",
    duracion: 125,
    genero: "Ciencia Ficción"
};

// Función para crear una nueva película
function crearNuevaPelicula() {
    // Crear el elemento article
    const nuevaPelicula = document.createElement("article");
    nuevaPelicula.className = "pelicula";
    nuevaPelicula.setAttribute("data-id", 4);

    // Crear el contenido HTML
    nuevaPelicula.innerHTML = `
        <h2>${nuevaPeliculaData.titulo}</h2>
        <p>Duración: ${nuevaPeliculaData.duracion} minutos. Género: ${nuevaPeliculaData.genero}.</p>
        <button class="btnSeleccionar" id="btn${4}">Seleccionar</button>
    `;

    // Añadir la nueva película a la sección
    seccionPeliculas.appendChild(nuevaPelicula);
    console.log("Nueva película añadida:", nuevaPeliculaData.titulo);
}

// Añadir event listener al botón de añadir película
const btnAnadirPelicula = document.getElementById("btnAnadirPelicula");
btnAnadirPelicula.addEventListener("click", crearNuevaPelicula);
