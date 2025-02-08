# Ejercicio: Añadir un Nuevo Cine y Modo Oscuro

En este ejercicio se invita a los estudiantes a ampliar el proyecto **Unir-cinema-custom-hook** del código de apoyo para:

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
      En `src/App.js` añade un nuevo estado (por ejemplo, `darkMode`) que controle si la aplicación se muestra en modo oscuro o no.
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
