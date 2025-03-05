import React from 'react';
import {Text, View} from "react-native";
import {router} from 'expo-router';
import CinemaSelectionButton from "../../../../../components/CinemaSelectionButton";

const HomeScreen = () => {
    return (
        <View className="flex-1 mt-5 bg-white">
            <View className="flex-1 px-10 mt-5 text-white">
                <Text className="text-center text-4xl mb-10">UNIR Cinema</Text>
                <Text className="text-center text-2xl mb-10">¿A qué cine deseas ir?</Text>
                <View className="flex-row flex-wrap justify-between">
                    <CinemaSelectionButton
                        onPress={() => router.push('/landing/Madrid')}
                        onLongPress={() => console.log("Cine de Madrid - LongPress")}
                        icon="city"
                    >
                        Madrid
                    </CinemaSelectionButton>
                    <CinemaSelectionButton
                        onPress={() => router.push('/landing/Barcelona')}
                        onLongPress={() => console.log("Cine de Barcelona - LongPress")}
                        icon="city"
                    >
                        Barcelona
                    </CinemaSelectionButton>
                </View>
                <View className="flex-row flex-wrap justify-between">
                    <CinemaSelectionButton
                        onPress={() => router.push('/landing/Valencia')}
                        onLongPress={() => console.log("Cine de Valencia - LongPress")}
                        icon="mountain-city"
                    >
                        Valencia
                    </CinemaSelectionButton>
                    <CinemaSelectionButton
                        onPress={() => router.push('/landing/Sevilla')}
                        onLongPress={() => console.log("Cine de Sevilla - LongPress")}
                        icon="tree-city"
                    >
                        Sevilla
                    </CinemaSelectionButton>
                </View>
            </View>
        </View>
    )
        ;
};

export default HomeScreen;