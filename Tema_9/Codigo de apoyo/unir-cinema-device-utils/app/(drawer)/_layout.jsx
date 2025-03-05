import React from 'react';
import {Drawer} from "expo-router/drawer";
import {Ionicons} from "@expo/vector-icons";
import CinemaDrawer from "../../components/CinemaDrawer";

const DrawerLayout = (props) => {

    return (
        <Drawer
            drawerContent = {CinemaDrawer}
            screenOptions={{
                overlayColor: 'rgba(0,0,0,0.4)',
                drawerActiveTintColor: '#427787',
                headerShadowVisible: false,
                headerShown: false,
                sceneContainerStyle: {
                    backgroundColor: 'red'
                }
            }}
        >
            <Drawer.Screen
                name="(tabs)" //Este es el nombre de la página y debe coincidir con la url desde la raíz
                options={{
                    drawerLabel: 'Inicio',
                    title: 'Inicio',
                    drawerIcon: () => <Ionicons name="home-outline" size={24} color="black"/>
                }}
            />
            <Drawer.Screen
                name="about/index"
                options={{
                    drawerLabel: 'Sobre nosotros',
                    title: 'Sobre nosotros',
                    drawerIcon: () => <Ionicons name="people-outline" size={24} color="black"/>
                }}
            />
        </Drawer>
    );
}

export default DrawerLayout;