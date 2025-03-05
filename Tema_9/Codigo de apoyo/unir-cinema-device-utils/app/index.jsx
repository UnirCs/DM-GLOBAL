import React from 'react';
import {Redirect} from "expo-router";
import {SafeAreaView} from "react-native";

/**
 * Componente principal de la aplicación
 * Lo unico que hace es redirigir a la ruta /home.
 * Consideramos que /home es la ruta principal de la aplicación, y la ruta principal del Stack.
 */
const App = () => {
    return (
        <Redirect href="/home"/>
    );
}

export default App;