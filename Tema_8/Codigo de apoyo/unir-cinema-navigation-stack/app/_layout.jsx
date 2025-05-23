import '../global.css';
import { Slot, SplashScreen } from 'expo-router';
import {useFonts} from "expo-font";
import React, {useEffect} from "react";
import {Image, SafeAreaView, StatusBar, Text, View} from "react-native";

// Ocultamos el SplashScreen hasta que las fuentes estén cargadas
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {

    // Cargamos las fuentes necesarias para la aplicación

    const [fontsLoaded, error] = useFonts({
        'SpaceMono-Regular': require('../assets/fonts/SpaceMono-Regular.ttf')
    });

    // Ocultamos el SplashScreen cuando las fuentes estén cargadas
    useEffect(() => {
        if (error) throw error;

        if (fontsLoaded) SplashScreen.hideAsync();
    }, [fontsLoaded, error]);

    if (!fontsLoaded && !error) return null;

    return (
        //<View style={{ flex: 1 }}>
        //<Text>Hola que tal por arriba</Text>
            <Slot/>
    //<Text>Hola que tal por abajo</Text>
        //</View>

    );
};
export default RootLayout;
