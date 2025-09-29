const axios = require('axios');

axios.patch('https://reqres.in/api/users/2',
    {
        job: 'Senior Developer'
    }
    ,
    {
        headers: {
            'x-api-key': 'reqres-free-v1'
        }
    }
)
    .then(response => {
        console.log('Usuario actualizado parcialmente:', response.data);
    })
    .catch(error => {
        console.error('Error al actualizar el usuario:', error);
    });
