// Seleccionamos el contenedor de películas
const moviesContainer = document.getElementById('movies');

// Creamos un nuevo elemento article para la nueva película
const newMovie = document.createElement('article');
newMovie.classList.add('movie');
newMovie.setAttribute('data-id', '6');

// Asignamos la estructura interna (usamos innerHTML para simplificar)
newMovie.innerHTML = `
  <h2>El Regreso del Héroe</h2>
  <p><strong>Director:</strong> Andrea Soto</p>
  <p><strong>Actores:</strong> Marcos Díaz, Lucía Vargas</p>
  <p><strong>Categorías:</strong> Acción, Aventura</p>
  <div class="sessions">
    <button class="session-btn">10:45</button>
    <button class="session-btn">13:45</button>
    <button class="session-btn">16:45</button>
  </div>
`;

// Se agrega la nueva película al final del contenedor
moviesContainer.appendChild(newMovie);
console.log("Nueva película agregada.");
