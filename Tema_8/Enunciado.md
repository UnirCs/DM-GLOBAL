## Creación de componentes React Native y Navegación

### Ejercicio 1: Creación de componentes básicos en React Native

El objetivo de este ejercicio un componente funcional básico en React Native y aplicar estilos a través de Nativewind.

#### Pasos a seguir

Partimos de la solución del ejercicio del tema anterior, en la que hemos configurado un proyecto de React Native con Expo y hemos aplicado estilos sencillos a través de Nativewind.
Lo siguiente que haremos para construir la versión de app móvil de nuestro proyecto de cine es crear algo parecido a la ventana de selección de cine que se muestra en la versión web. Para ello necesitaremos disponer de algo "parecido" a un botón que contenga texto. Para ello lo que haremos será crear una carpeta `components` en la raíz de nuestro proyecto y dentro de ella un archivo `CinemaButton.js`.

Se recomienda revisar la siguiente documentación para la creación de este botón:
- Pressable: https://reactnative.dev/docs/pressable
- SafeAreaView: https://reactnative.dev/docs/safeareaview
- Border radius de Tailwind: https://tailwindcss.com/docs/border-radius

El look and feel del botón puede ser el que desees, tienes libertad total. Cuando se presione el botón debe mostrarse con un console.log la ciudad elegida únicamente.

Una vez que nuestro botón esté creado, vamos a insertar 4 de ellos en nuestra, por ahora, pantalla principal `App.js`. Serán los botones para accceder en un futuro a los cines de Madrid, Barcelona, Valencia y Sevilla.
¿Los estilos no se visualizan correctamente? Revisa el archivo `tailwind.config.js` e incluye la carpeta `components` que hemos creado: `"./components/**/*.{js,jsx,ts,tsx}"`.


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
