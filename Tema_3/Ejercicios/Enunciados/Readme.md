### Modificación de la web con JavaScript y el DOM

Vamos a tomar como base los siguientes archivos (copialos en tu entorno de desarrollo local, en la misma carpeta):

Index.html
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Cine XYZ - Cartelera</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <h1>Cine XYZ - Cartelera de Películas</h1>
  </header>
  <main>
    <section id="movies">
      <article class="movie" data-id="1">
        <h2>El Viaje Inesperado</h2>
        <p><strong>Director:</strong> Juan Pérez</p>
        <p><strong>Actores:</strong> Ana García, Luis Martínez, Carla Ruiz</p>
        <p><strong>Categorías:</strong> Aventura, Fantasía</p>
        <div class="sessions">
          <button class="session-btn">10:00</button>
          <button class="session-btn">13:00</button>
          <button class="session-btn">16:00</button>
        </div>
      </article>
      <article class="movie" data-id="2">
        <h2>Amor en Tiempos de Guerra</h2>
        <p><strong>Director:</strong> María López</p>
        <p><strong>Actores:</strong> José Ramírez, Laura Gómez</p>
        <p><strong>Categorías:</strong> Drama, Romance</p>
        <div class="sessions">
          <button class="session-btn">11:30</button>
          <button class="session-btn">14:30</button>
          <button class="session-btn">18:30</button>
        </div>
      </article>
      <article class="movie" data-id="3">
        <h2>Misterios del Pasado</h2>
        <p><strong>Director:</strong> Carlos Fernández</p>
        <p><strong>Actores:</strong> Pedro Sánchez, Marta Torres, Diego García</p>
        <p><strong>Categorías:</strong> Suspenso, Historia</p>
        <div class="sessions">
          <button class="session-btn">12:15</button>
          <button class="session-btn">15:15</button>
          <button class="session-btn">20:15</button>
        </div>
      </article>
      <article class="movie" data-id="4">
        <h2>La Última Oportunidad</h2>
        <p><strong>Director:</strong> Elena Muñoz</p>
        <p><strong>Actores:</strong> Sergio Díaz, Paula Navarro</p>
        <p><strong>Categorías:</strong> Acción, Suspenso</p>
        <div class="sessions">
          <button class="session-btn">09:45</button>
          <button class="session-btn">12:45</button>
          <button class="session-btn">15:45</button>
        </div>
      </article>
      <article class="movie" data-id="5">
        <h2>Risas y Más Risas</h2>
        <p><strong>Director:</strong> Roberto García</p>
        <p><strong>Actores:</strong> Javier Morales, Sofía Herrera</p>
        <p><strong>Categorías:</strong> Comedia</p>
        <div class="sessions">
          <button class="session-btn">11:00</button>
          <button class="session-btn">14:00</button>
          <button class="session-btn">17:00</button>
        </div>
      </article>
    </section>
  </main>
  <footer>
    <p>&copy; 2025 Cine XYZ. Todos los derechos reservados.</p>
  </footer>
  <!-- Script para interactuar con el DOM -->
  <script src="script.js"></script>
</body>
</html>

```

Style.css
```css
/* Estilos generales */
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f7f7f7;
  color: #333;
}

header {
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
}

main {
  padding: 20px;
}

#movies {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.movie {
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 15px;
  border-radius: 5px;
}

.movie h2 {
  margin-top: 0;
}

.movie p {
  margin: 5px 0;
}

.sessions {
  margin-top: 10px;
}

.session-btn {
  background-color: #4285f4;
  color: #fff;
  border: none;
  padding: 8px 12px;
  margin-right: 10px;
  border-radius: 3px;
  cursor: pointer;
}

.session-btn:hover {
  background-color: #357ae8;
}

footer {
  background-color: #333;
  color: #fff;
  padding: 10px;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
}

```

Script.js
```javascript
/*
 * Archivo: script.js
 *
 * Aquí podrás escribir tu código JavaScript para interactuar con el DOM de la página.
 *
 * Ejercicios:
 * 1. Realizar consultas sobre los elementos de la página.
 * 2. Añadir una nueva película al final de la lista.
 * 3. Eliminar la primera película de la lista.
 * 4. Recorrer el DOM (excluyendo nodos de texto) en preorden, postorden e inorden.
 *
 * Consulta la documentación:
 * - MDN Document: https://developer.mozilla.org/es/docs/Web/API/Document
 * - MDN Element: https://developer.mozilla.org/es/docs/Web/API/Element
 * - MDN Node: https://developer.mozilla.org/es/docs/Web/API/Node
 */

/* Puedes descomentar y modificar el siguiente código para probar tus soluciones */

// console.log("Script cargado correctamente");

```

### Ejercicio 1: Consultas sobre el DOM usando su API
Utilizando la API del DOM debes realizar las siguientes consultas para obtener información de la página.
- Contar el número total de películas (elementos con la clase "movie").
- Obtener el nombre del director de la segunda película.
- Listar las sesiones (horas) de la tercera película.
- Seleccionar el primer botón de sesión de la primera película.

Es recomendable que revises la siguiente documentación para realizar el ejercicio:
- [Get Element by class name](https://developer.mozilla.org/es/docs/Web/API/Document/getElementsByClassName)
- [Query Selector](https://developer.mozilla.org/es/docs/Web/API/Document/querySelector)

### Ejercicio 2: Modificacion añadiendo una pelicula
Utilizando el DOM, añade un nuevo elemento (película) al final de la lista existente. La nueva película debe tener la misma estructura que las demás.

Es recomendable que revises la siguiente documentación para realizar el ejercicio:
- [Create Element](https://developer.mozilla.org/es/docs/Web/API/Document/createElement)
- [Append Child](https://developer.mozilla.org/es/docs/Web/API/Node/appendChild)

### Ejercicio 3: Eliminar la primera película
Mediante la manipulación del DOM, elimina el primer elemento que representa una película de la lista.

Es recomendable que revises la siguiente documentación para realizar el ejercicio:
- [Remove Child](https://developer.mozilla.org/es/docs/Web/API/Node/removeChild)
- [Query Selector](https://developer.mozilla.org/es/docs/Web/API/Document/querySelector)

### Ejercicio 4: Recorrer el DOM (preorden y postorden)
Escribe funciones en JavaScript que recorran el árbol DOM (excluyendo nodos de texto) de diferentes formas:
Preorden: procesar un nodo y luego sus hijos.
Postorden: procesar los hijos y finalmente el nodo padre.
Se usará como raíz el elemento con id "movies".


Es recomendable que revises la siguiente documentación para realizar el ejercicio:
- [Tree traversal techniques](https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/)
- [Child Nodes](https://developer.mozilla.org/es/docs/Web/API/Node/childNodes)
- [Node type](https://developer.mozilla.org/es/docs/Web/API/Node/nodeType)