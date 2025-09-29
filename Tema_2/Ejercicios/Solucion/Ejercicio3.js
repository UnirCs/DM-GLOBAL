fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'reqres-free-v1'
    },
    body: JSON.stringify({
        name: 'Jane Doe',
        job: 'QA Engineer'
    })
})
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al crear el usuario');
        }
        return response.json();
    })
    .then(data => console.log('Usuario creado:', data))
    .catch(error => console.error('Error:', error));
