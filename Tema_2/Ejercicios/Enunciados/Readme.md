### Ejercicio 1 (OMDB con fetch):
Realiza una consulta a la API de OMDB para buscar películas que contengan la palabra "Batman" en el título. Deberás usar el método GET con la API Fetch.

Pista: La URL base es http://www.omdbapi.com/ y se requiere un parámetro apikey (puedes obtenerla en https://www.omdbapi.com/apikey.aspx) y el parámetro s para buscar por título.

### Ejercicio 2 (OMDB con axios):
Realiza una consulta a la API de OMDB para obtener los detalles de la película "Inception". Utiliza el parámetro t para buscar por título y emplea Axios para la petición.

### Ejercicio 3 (Reqres - Crear usuario con fetch):
Utilizando la API pública de Reqres (https://reqres.in/), crea un nuevo usuario mediante una petición POST. Envía un objeto JSON con los campos name y job.

*Importante:* Asegúrate de incluir en las peticiones la API Key de capa gratuita de reqres. Más información sobre esto [aqui](https://reqres.in/signup)

Pista: La ruta para crear usuario es https://reqres.in/api/users.

### Ejercicio 4 (Reqres - Actualización parcial con axios):
Utilizando la API de Reqres, actualiza de forma parcial un usuario existente mediante una petición PATCH. Envía un objeto JSON con un cambio en el campo job. No es necesario que uses el usuario que acabas de crear (de hecho, es probable que no obtengas nada si buscas por él. Usa el usuario con ID bajo como 2, por ejemplo).

*Importante:* Asegúrate de incluir en las peticiones la API Key de capa gratuita de reqres. Más información sobre esto [aqui](https://reqres.in/signup)

Pista: Utiliza la ruta https://reqres.in/api/users/2 para actualizar el usuario con ID 2.