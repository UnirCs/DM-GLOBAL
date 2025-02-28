import React from 'react';
import {Text, View, Image} from "react-native";
import {router} from 'expo-router';
import CinemaButton from "../../../../components/CinemaButton";

const HomeScreen = () => {
    return (
        <View className="flex-1 mt-5">
            <View className="flex-1 px-10 mt-5 bg-white-500 text-white">

                <Text className="text-center text-4xl mb-10">UNIR Cinema</Text>
                <Text className="text-center text-2xl mb-10">¿A qué cine deseas ir?</Text>

                <CinemaButton onPress={() => router.push('/tabs/(stack)/landing/Madrid')}
                              onLongPress={() => console.log("Cine de Madrid - LongPress")}>
                    Madrid
                </CinemaButton>
                <CinemaButton onPress={() => router.push('/tabs/(stack)/landing/Barcelona')}
                              onLongPress={() => console.log("Cine de Barcelona - LongPress")}>
                    Barcelona
                </CinemaButton>
                <CinemaButton onPress={() => router.push('/tabs/(stack)/landing/Valencia')}
                              onLongPress={() => console.log("Cine de Valencia - LongPress")}>
                    Valencia
                </CinemaButton>
                <CinemaButton onPress={() => router.push('/tabs/(stack)/landing/Sevilla')}
                              onLongPress={() => console.log("Cine de Sevilla - LongPress")}>
                    Sevilla
                </CinemaButton>
            </View>
            <View className="flex-1 w-full h-fit items-center bg-unirLogoBg self-center absolute bottom-0">
                <Image
                    source={{uri: 'https://www.codigovzla.org/wp-content/uploads/UNIR_launiversidadeninternet-arrastrado.jpeg'}}
                    style={{
                        width: 150,
                        height: 100,
                        backgroundColor: '#0096c3',
                    }}
                />
            </View>
        </View>
    )
};

export default HomeScreen;