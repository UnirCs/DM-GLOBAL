fetch('http://www.omdbapi.com/?apikey=YOUR_API_KEY&s=Batman')
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la consulta a OMDB');
        }
        return response.json();
    })
    .then(data => console.log('Resultado de búsqueda de Batman:', data))
    .catch(error => console.error('Error:', error));
