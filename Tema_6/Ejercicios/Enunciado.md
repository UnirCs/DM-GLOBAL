### Ejercicio 1: Añadir Rutas Estáticas y Dinámicas para Información Adicional de la empresa y de los cines

En este ejercicio, se ampliará la aplicación para incluir dos nuevas vistas:

1. **Ruta Estática – "Sobre Nosotros"**  
   Se creará una nueva ruta estática que mostrará información genérica sobre el cine (por ejemplo, cuándo se empezó a operar, las ciudades en las que prestan servicio, la calidad de sus salas, etc.).
    - La ruta sugerida es: `/sobre-nosotros`.
    - Crea un nuevo archivo en `src/components/` llamado `AboutUs.js`.
    - Este componente debe renderizar un bloque de texto (o varios párrafos) que describan la historia y características generales del cine (por ejemplo, cuándo se fundó, en qué ciudades opera, calidad de salas, etc.).
    - Crea también un archivo de estilos `AboutUs.css` para aplicar estilos siguiendo la metodología BEM.
    - Recuerda incluir en el menú de navegación del header un enlace a esta nueva ruta.


2. **Ruta Dinámica – Detalle del Cine**  
   Se creará una vista dinámica específica para cada cine. Esta página mostrará información detallada del cine de la ciudad seleccionada (por ejemplo: fecha de apertura, número de salas, dirección, etc.).
    - La ruta sugerida es: `/cines/:cinema/detalle`
    - Se deberá acceder a esta página desde un enlace que se colocará, por ejemplo, en la landing de cada cine.
    - Crea un nuevo archivo en `src/components/` llamado `CinemaDetail.js`. 
    - Este componente debe usar el parámetro de la URL (por ejemplo, :cinema) para mostrar información específica del cine de esa ciudad, como la fecha de apertura, número de salas, dirección, etc. 
    - Crea un archivo de estilos `CinemaDetail.css` para definir la apariencia del componente.
    - Debe haber un botón de "Volver" que redirija a la landing de la ciudad seleccionada.


Recuerda que debes actualizar las rutas en `App.js`.

---

### Ejercicio 2 : Refactorización del Proyecto – Separar Vistas de Componentes

El objetivo de este ejercicio es refactorizar la estructura de carpetas del proyecto para mejorar la organización del código. Actualmente, todos los componentes funcionales se encuentran en la carpeta `components/`, pero en una aplicación real existen dos tipos de componentes:

1. **Vistas completas:** Son aquellos componentes que representan páginas enteras de la aplicación (por ejemplo, HomePage, Landing, MovieDetails, SeatSelection, AboutUs, CinemaDetail).
2. **Componentes de interfaz:** Son piezas o fragmentos reutilizables de la interfaz de usuario (por ejemplo, Header, Footer, Pelicula, SessionLanguageSelector).

La tarea consistirá en crear una nueva carpeta llamada `views/` donde se moverán todos los componentes que representan vistas completas, dejando en `components/` únicamente aquellos componentes que son fragmentos de la interfaz.

#### Pasos a Seguir

1. **Crear la Carpeta `views/`:**
   - Dentro de la carpeta `src/`, crea una nueva carpeta llamada `views/`.

2. **Mover los Componentes de Vistas Completas:**
   - Mueve los siguientes archivos desde `src/components/` (o donde se encuentren actualmente) a `src/views/`:
      - `HomePage.js` y `HomePage.css`
      - `Landing.js` y `Landing.css`
      - `MovieDetails.js` y `MovieDetails.css`
      - `SeatSelection.js` y `SeatSelection.css`
      - `AboutUs.js` y `AboutUs.css`
      - `CinemaDetail.js` y `CinemaDetail.css`
   - Asegúrate de que los componentes que no son vistas (por ejemplo, `Header.js`, `Footer.js`, `Pelicula.js`, `SessionLanguageSelector.js`) permanezcan en la carpeta `src/components/`.

3. **Actualizar las Importaciones:**
   - Revisa y actualiza las rutas de importación en todos los archivos afectados, por ejemplo, en `App.js`:
     ```javascript
     // Antes:
     import HomePage from './components/HomePage';
     // Después:
     import HomePage from './views/HomePage';
     ```
   - Realiza este cambio para todas las vistas que se han movido.

4. **Verificar la Aplicación:**
   - Ejecuta la aplicación para asegurarte de que todo sigue funcionando correctamente y que las rutas de importación han sido actualizadas.

#### Ventajas de Organizar el Código de esta Forma

- **Separación de Responsabilidades:**  
  Se facilita la distinción entre componentes que forman parte de la interfaz (pequeños fragmentos reutilizables) y componentes que representan páginas completas. Esto mejora la legibilidad y organización del código.

- **Mantenibilidad:**  
  Al tener una estructura organizada, es más fácil encontrar y modificar componentes específicos. Los cambios en la interfaz se pueden aislar en la carpeta `components/`, mientras que la lógica de las páginas completas se gestiona en la carpeta `views/`.

- **Escalabilidad:**  
  En proyectos grandes, una estructura modular y bien definida permite agregar nuevas funcionalidades sin que el código se vuelva desordenado. Esto es especialmente útil cuando el equipo de desarrollo crece y varios desarrolladores trabajan en distintas partes del proyecto.

- **Facilidad para la Colaboración:**  
  Una estructura de carpetas clara y bien documentada reduce la curva de aprendizaje para nuevos desarrolladores que se integren al proyecto, permitiendo una colaboración más eficiente.

## Recursos Adicionales

- [Guía sobre Organización de Proyectos en React](https://reactjs.org/docs/faq-structure.html)

---



