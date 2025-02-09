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

