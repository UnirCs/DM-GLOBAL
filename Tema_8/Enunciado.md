## Creación de componentes React Native y Navegación

### Ejercicio 2: Implementar el sistema de navegación

En ejercicios anteriores hemos trabajado con un proyecto React Native creado a partir del template `blank`. Este template es muy sencillo y no incluye otras muchas funcionalidades de Expo, como Expo Router.

Para incluir expo-router y poder trabajar con navegación en nuestra aplicación, tenemos dos opciones:

- Instalar de forma manual todas las dependencias de expo-router y configurar nuestro proyecto, tal como se indica en https://docs.expo.dev/router/installation/
- Crear un nuevo proyecto con el template `default` de Expo, que ya incluye Expo Router y otras funcionalidades. No hemos hecho esto hasta ahora porque ese template incluye muchos más archivos de los necesarios y en un primer momento esto podría haber sido abrumador.

Dado que ya tenemos conocimientos suficientes, vamos a crear el nuevo proyecto y lo primero que haremos será copiar todo aquello que ya usamos anteriormente (instalación y configuración de nativewind, fuentes, componentes realizados...). Esta será la base para poder comenzar con el ejercicio.
Para ello ejecutaremos el comando `npx create-expo-app@latest unir-cinema-navigation`.

Una vez que el proyecto esté creado, realizaremos los siguientes ajustes:

- Instalaremos nativewind, como ya se ha hecho en ejercicios anteriores.
- Borraremos el contenido de la carpeta `app`, `components`, `hooks` y borraremos las carpetas `constants` y `scripts`. En este punto podría decirse que tenemos un proyecto en blanco con nativewind (aunque no funcionaría si lo arrancamos ya que no tenemos ningún componente para renderizar de forma principal).
- Copiaremos los componentes que ya hemos creado en el ejercicio anterior, a una carpeta `components` en el nuevo proyecto.
- Copiaremos las fuentes que hemos utilizado en el ejercicio anterior, a una carpeta `assets/fonts` en el nuevo proyecto. O usaremos otras nuevas, eso queda a tu elección. Recuerda modificar todo lo relacionado con las fuentes si haces esto.
- Para estar como estábamos antes, nos falta ubicar el componente funcional que se renderizará por defecto. Esto ya no se situará en un `App.json` en la raíz. En su lugar, se situará en `app/index.js`. Copia el contenido de `App.json` en `app/index.js`.
- Este archivo `index.js` nos debe redirigir al componente principal del Stack de navegación. Nuestro stack de navegación será el siguiente (muy parecido al que manejábamos en la versión web):
 - `Home`: Será la pantalla de selección de cine.
 - `Landing`: Será la pantalla donde tendremos todas las películas y horarios disponibles para cada película.
 - `MovieDetail`: Será la pantalla donde veremos los detalles de una película en concreto.
 - `Booking`: Será la pantalla donde se realizará la reserva de una película.
- Sírvete del código de apoyo, ya que para el ejercicio solo tendrás que implementar la navegación a `MovieDetail` y `Booking`.
