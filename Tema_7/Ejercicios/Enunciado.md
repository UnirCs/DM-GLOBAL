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