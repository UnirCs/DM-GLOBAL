fetch('http://unir.cinema.net/movies')
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la petición GET');
        }
        return response.json();
    })
    .then(data => console.log('Películas:', data))
    .catch(error => console.error(error));


fetch('http://unir.cinema.net/movies', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "nombre": "Inception",
        "categoria": "Ciencia ficción, Thriller",
        "año": 2010,
        "director": "Christopher Nolan",
        "actores": ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
        "sinopsis": "Dom Cobb es un ladrón especializado en extraer secretos del subconsciente..."
    })
})
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la petición POST');
        }
        return response.json();
    })
    .then(data => console.log('Película creada:', data))
    .catch(error => console.error(error));


fetch('http://unir.cinema.net/movies/1', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "nombre": "Inception",
        "categoria": "Ciencia ficción, Thriller",
        "año": 2010,
        "director": "Christopher Nolan",
        "actores": ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
        "sinopsis": "Nueva sinopsis actualizada de Inception."
    })
})
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la petición PUT');
        }
        return response.json();
    })
    .then(data => console.log('Película actualizada:', data))
    .catch(error => console.error(error));


fetch('http://unir.cinema.net/movies/1', {
    method: 'DELETE'
})
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la petición DELETE');
        }
        // En algunos casos el servidor no devuelve contenido, por eso se puede usar response.text()
        return response.text();
    })
    .then(result => console.log('Película eliminada:', result))
    .catch(error => console.error(error));


fetch('http://unir.cinema.net/movies/1', {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "categoria": "Ciencia ficción, Thriller, Acción"
    })
})
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la petición PATCH');
        }
        return response.json();
    })
    .then(data => console.log('Película modificada parcialmente:', data))
    .catch(error => console.error(error));
