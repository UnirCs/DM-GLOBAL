# Ejercicio 1: Añadir un Nuevo Cine y Modo Oscuro

En este ejercicio deberás ampliar el proyecto **Unir-cinema-vite-custom-hook** del código de apoyo para:

1. **Añadir un nuevo cine**
    - Incorporar una nueva ciudad (por ejemplo, "Sevilla") en la aplicación.
    - Crear el archivo de datos correspondiente para dicha ciudad.
    - Actualizar todos los archivos JavaScript necesarios para que la nueva opción de cine funcione correctamente.

2. **Implementar un Modo Oscuro**
    - Gestionar el modo oscuro a través de un estado global en lugar de modificar directamente el DOM.
    - Mostrar un Slider Button (toggle) en la esquina superior izquierda del Header para que el usuario pueda alternar entre el modo claro y el modo oscuro.
    - Hacer que los componentes adopten los estilos correspondientes en función del estado del modo (por ejemplo, cambiando colores de fondo, texto, etc.).

---

## Pasos Sugeridos

1. **Añadir el Nuevo Cine ("Sevilla")**
    - **Crear el archivo de datos:**  
      Crea un nuevo archivo en `src/data/` llamado `moviesDataSevilla.js` con un array de películas propias para Sevilla.
    - **Actualizar el Selector de Cine:**  
      Modifica `src/components/CineSelector.js` para incluir la opción "Sevilla" en el menú desplegable.
    - **Adaptar el Custom Hook:**  
      En `src/hooks/useMovies.js`, añade la lógica para que cuando la ciudad sea "sevilla" se utilicen los datos del nuevo archivo.

2. **Implementar el Modo Oscuro**
    - **Estado Global para el Tema:**  
      En `src/App.js` añade un nuevo estado (por ejemplo, `darkMode`) que controle si la aplicación se muestra en modo oscuro o no. ¿Tendría sentido usar un contexto global para esto? Considera crear un `ThemeContext` o algo así si es necesario.
    - **Propagar el Estado:**  
      Pasa el valor de `darkMode` y la función para alternarlo a los componentes que necesiten cambiar su apariencia (Header, Landing, Footer, etc.).
    - **Cambios en CSS:**  
      Define en `src/App.css` estilos alternativos para el modo oscuro. Se puede utilizar la clase `dark-mode` en el contenedor principal para condicionar la apariencia de los elementos.
    - **Slider Button en el Header:**  
      En `src/components/Header.js` incorpora un Slider Button (por ejemplo, usando un `<input type="checkbox">` estilizado) en la parte superior izquierda. Este botón debe actualizar el estado global del modo oscuro al activarse o desactivarse.

3. **Recursos y Documentación Útil**
    - [React Documentation - Hooks](https://es.reactjs.org/docs/hooks-intro.html)
    - [Axios Documentation](https://axios-http.com/docs/intro)
    - [React - Conditional Rendering](https://es.reactjs.org/docs/conditional-rendering.html)
    - [CSS Variables y Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)

---

# Ejercicio 2: Sesiones con Idioma y Filtrado por Preferencia


En este ejercicio se ampliará el proyecto **Unir-cinema-vite-custom-hook-context** (que contiene la resolución del ejercicio anterior) para que:
1. **Las sesiones de cada película** incluyan la información del idioma de proyección. Cada sesión se representará ahora mediante un objeto que contendrá:
   - `hour`: la hora de inicio.
   - `language`: el idioma de proyección, que puede ser `"castellano"` o `"vose"`.

   *Nota:* Se sugiere asignar el idioma de forma aleatoria a cada sesión (por ejemplo, utilizando `Math.random()` para decidir entre uno y otro).


2. **Filtrar las sesiones mostradas** en función de la preferencia del usuario. Se debe añadir un nuevo selector (dentro de la Landing) que permita elegir entre:
   - Mostrar **todas** las sesiones.
   - Mostrar solo las sesiones en **castellano**.
   - Mostrar solo las sesiones en **VOSE**.


3. **Gestionar la preferencia de idioma** junto con la ciudad y el modo oscuro en el contexto global (GlobalContext), de forma que no se tenga que pasar esta información por props a cada componente (evitando el *prop drilling*).

## Pasos Sugeridos

1. **Actualizar los Archivos de Datos (JSON de prueba)**
   - Modificar cada archivo de datos (por ejemplo, `moviesDataMadrid.js`, `moviesDataBarcelona.js`, `moviesDataValencia.js`, y `moviesDataSevilla.js`) para que la propiedad `sessions` de cada película sea un array de objetos en lugar de un array de cadenas.
   - Cada objeto de sesión debe tener la siguiente estructura:
     ```javascript
     { hour: "14:00", language: "castellano" } // o "vose"
     ```
   - Ejemplo para una película:
     ```json
     {
       id: 1,
       name: "Inception",
       director: "Christopher Nolan",
       actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page",
       categories: "Acción, Ciencia Ficción",
       sessions: [
         { hour: "14:00", language: Math.random() < 0.5 ? "castellano" : "vose" },
         { hour: "17:00", language: Math.random() < 0.5 ? "castellano" : "vose" },
         { hour: "20:00", language: Math.random() < 0.5 ? "castellano" : "vose" }
       ]
     }
     ```


2. **Modificar el Contexto Global**
   - En el archivo `GlobalContext.js` (o similar), añade un nuevo estado para la preferencia de idioma de las sesiones, por ejemplo `sessionLanguage`, con valor por defecto `"todos"`.
   - Proporciona además una función para modificar esta preferencia (por ejemplo, `changeSessionLanguage`).


3. **Crear el Componente Selector de Idioma para Sesiones**
   - Crea un nuevo componente (por ejemplo, `SessionLanguageSelector.js`) dentro de la carpeta `src/components/` que muestre un selector (por ejemplo, un `<select>` o un grupo de radio buttons) con las siguientes opciones:
      - **Todas**
      - **Castellano**
      - **VOSE**
   - Este componente deberá utilizar el contexto global para leer y actualizar la preferencia de idioma de las sesiones.


4. **Actualizar el Componente Landing**
   - Dentro de `Landing.js`, coloca el nuevo componente `SessionLanguageSelector` para que el usuario pueda seleccionar la preferencia de idioma.
   - No es necesario pasar la preferencia por props, ya que se extraerá desde el contexto.


5. **Actualizar el Componente Pelicula**
   - Modifica `Pelicula.js` para que, al renderizar las sesiones, se filtren según la preferencia del usuario almacenada en el contexto.
   - Si la preferencia es `"todos"`, se muestran todas las sesiones; si es `"castellano"` o `"vose"`, solo se mostrarán las sesiones que tengan el idioma correspondiente.


6. **Documentación y Recursos Útiles**
   - [React - Context API](https://es.reactjs.org/docs/context.html)
   - [React - useContext Hook](https://es.reactjs.org/docs/hooks-reference.html#usecontext)
   - [React - Conditional Rendering](https://es.reactjs.org/docs/conditional-rendering.html)
   - [JavaScript Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
