const axios = require('axios');

axios.patch('https://reqres.in/api/users/2', {
    job: 'Senior Developer'
})
    .then(response => {
        console.log('Usuario actualizado parcialmente:', response.data);
    })
    .catch(error => {
        console.error('Error al actualizar el usuario:', error);
    });
