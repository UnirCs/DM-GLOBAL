const axios = require('axios');

axios.get('http://www.omdbapi.com/', {
    params: {
        apikey: 'YOUR_API_KEY',
        t: 'Inception'
    }
})
    .then(response => {
        console.log('Detalles de Inception:', response.data);
    })
    .catch(error => {
        console.error('Error en la consulta:', error);
    });
