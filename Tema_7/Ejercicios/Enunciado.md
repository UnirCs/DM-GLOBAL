### Ejercicio 1: Configuración de proyecto y simuladores de React Native

El objetivo de este ejercicio es configurar un nuevo proyecto de React Native con Expo y ejecutarlo en un simulador de iOS y Android (en función del sistema operativo que estés utilizando).

#### Pasos a seguir

1. **Crear un nuevo proyecto con Expo:**
   - Crea un nuevo proyecto de React Native con Expo ejecutando el siguiente comando:
     ```bash
     npx create-expo-app@latest --template blank cine-native-app
     ```


2. **Ejecutar el proyecto en un simulador de iOS:**
   - Si estás utilizando macOS (y has seguido la guía de instalación del simulador a la que se hace referencia en el tema), puedes ejecutar el proyecto en un simulador de iOS con el siguiente comando:
     ```bash
     cd cine-native-app
     npm start
     ```
   - Una vez que se inicie el servidor de Expo, presiona `i` para abrir el proyecto en un simulador de iOS.


3. **Ejecutar el proyecto en un simulador de Android:**
   - Si estás utilizando MacOs, Windows o Linux (y has seguido la guía de instalación del simulador a la que se hace referencia en el tema), puedes ejecutar el proyecto en un simulador de Android con el siguiente comando:
     ```bash
     cd cine-native-app
     npm start
     ```
   - Una vez que se inicie el servidor de Expo, presiona `a` para abrir el proyecto en un simulador de Android.


4. **Verificar**: A continuación vamos a juguetear para ver si efectivamente todo funciona correctamente. Dentro del `<View>` que se encuentra en `App.js`, vamos a agregar varios componentes de React Native `<Text>` con tu nombre y apellidos. Guarda el archivo y, si todo está correcto, deberías ver los cambios reflejados en el simulador.

5. **Uso de Nativewind**: Instala Nativewind en tu proyecto siguiendo [la guía de instalación oficial](https://www.nativewind.dev/getting-started/installation). Una vez instalado, modifica el componente `App.js` para que utilice los estilos de Nativewind. Por ejemplo: 
   - Intenta cambiar el color de fondo de la vista principal a `bg-blue-500` y el color del texto a `text-white`. Recuerda recargar la aplicación en el simulador para ver los cambios, o incluso detener la ejecución y volver a ejecutar y después recargar en caso de que no se visualicen los cambios.
   - Aplica otros estilos de Nativewind para poder eliminar los `styles` de React Native y utilizar solo los de Nativewind, intentando que el resultado visual sea similar al que tenías antes de aplicar Nativewind (flex-1, texto alineado al centro, contenido justificado al centro...).
   - Descarga una fuente de [Google Fonts](https://fonts.google.com/) y utilízala en tu aplicación. Para ello:
     - Descarga la fuente en formato `.ttf`. Elige la que quieras.
     - En caso de no existir, crea una carpeta `assets/fonts/` en la raíz de tu proyecto y coloca la fuente descargada en ella.
     - En el archivo `tailwind.config.js`, agrega la fuente descargada a la configuración de `fontFamily`, dentro de `extend` (en el ejemplo se ha usado Rasa). Es importante que el nombre de la fuente referenciada (el segundo string) coincida con el nombre del archivo `.ttf`:
       ```javascript
       extend: {
         fontFamily: {
        'rasa-light': [ 'Rasa-VariableFont', 'sans-serif' ],
        }
       },
       ```
     - Instala el módulo `expo-font` en tu proyecto:
       ```bash
       npm install expo-font
       ``` 
     - Añade el siguiente código que permite cargar las fuentes en el archivo `App.js`, antes de devolver el componente principal:
       ```javascript
       import {useFonts} from "expo-font";

       const [fontsLoaded, error] = useFonts({
        'Rasa-VariableFont': require('./assets/fonts/Rasa-VariableFont.ttf')
       });
       if (!fontsLoaded && !error) return null;
       ```
     - En el archivo `App.js`, utiliza la fuente en un componente de texto:
       ```javascript
       <Text className="font-work-light"> ¡Hola, Mundo! </Text>
       ```

6. **Verificar**: Verifica que los estilos de Nativewind se han aplicado correctamente y que la fuente descargada se muestra en el simulador. ¡Y juega todo lo que quieras 🤗🤗!


### Ejercicio 2: Creación de componentes básicos en React Native

El objetivo de este ejercicio un componente funcional básico en React Native y aplicar estilos a través de Nativewind.

#### Pasos a seguir

Partimos de la solución del ejercicio anterior, en la que hemos configurado un proyecto de React Native con Expo y hemos aplicado estilos sencillos a través de Nativewind.
Lo siguiente que haremos para construir la versión de app móvil de nuestro proyecto de cine es crear algo parecido a la ventana de selección de cine que se muestra en la versión web. Para ello necesitaremos disponer de algo "parecido" a un botón que contenga texto. Para ello lo que haremos será crear una carpeta `components` en la raíz de nuestro proyecto y dentro de ella un archivo `CinemaButton.js`.

Se recomienda revisar la siguiente documentación para la creación de este botón:


Una vez que nuestro botón esté creado, vamos a insertar 4 de ellos en nuestra, por ahora, pantalla principal `App.js`. Serán los botones para accceder en un futuro a los cines de Madrid, Barcelona, Valencia y Sevilla.
