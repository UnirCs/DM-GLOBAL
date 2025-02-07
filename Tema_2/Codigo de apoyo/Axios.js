const axios = require('axios');

axios.get('http://unir.cinema.net/movies')
    .then(response => {
        console.log('Películas:', response.data);
    })
    .catch(error => console.error(error));


axios.post('http://unir.cinema.net/movies', {
    "nombre": "Inception",
    "categoria": "Ciencia ficción, Thriller",
    "año": 2010,
    "director": "Christopher Nolan",
    "actores": ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
    "sinopsis": "Dom Cobb es un ladrón especializado en extraer secretos del subconsciente..."
})
    .then(response => {
        console.log('Película creada:', response.data);
    })
    .catch(error => console.error(error));


axios.put('http://unir.cinema.net/movies/1', {
    "nombre": "Inception",
    "categoria": "Ciencia ficción, Thriller",
    "año": 2010,
    "director": "Christopher Nolan",
    "actores": ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
    "sinopsis": "Nueva sinopsis actualizada de Inception."
})
    .then(response => {
        console.log('Película actualizada:', response.data);
    })
    .catch(error => console.error(error));

axios.delete('http://unir.cinema.net/movies/1')
    .then(response => {
        console.log('Película eliminada:', response.data);
    })
    .catch(error => console.error(error));


axios.patch('http://unir.cinema.net/movies/1', {
    "categoria": "Ciencia ficción, Thriller, Acción"
})
    .then(response => {
        console.log('Película modificada parcialmente:', response.data);
    })
    .catch(error => console.error(error));
