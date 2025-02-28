import React from 'react';
import {Tabs} from "expo-router";
import {FontAwesome} from "@expo/vector-icons";

const TabsLayout = (props) => {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: '#0096c3',
            headerShown: false,
            tabBarStyle: {
                backgroundColor: 'black'
            }
        }}>
            <Tabs.Screen
                name="(stack)"
                options={{
                    title: 'Home',
                    tabBarIcon: ({color}) => <FontAwesome size={28} name="home" color={color}/>,
                }}
            />
            <Tabs.Screen
                name="tickets/index"
                options={{
                    title: 'Entradas',
                    tabBarIcon: ({color}) => <FontAwesome size={28} name="ticket" color={color}/>,
                }}
            />
        </Tabs>
    )
}

export default TabsLayout;