import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';

const AboutUs = () => {
    return (
        <SafeAreaView className="flex-1">
            <ScrollView className="flex-1 p-5">
                <View className="mb-5">
                    <Text className="text-2xl font-bold text-center text-indigo-600">Sobre Nosotros</Text>
                </View>
                <View className="mb-4">
                    <Text className="text-lg text-gray-700">
                        ¡Bienvenido a nuestra aplicación de cine! Estamos dedicados a proporcionar la mejor experiencia cinematográfica para nuestros clientes. Nuestra aplicación te permite navegar fácilmente por las películas, seleccionar tus asientos y comprar entradas desde la comodidad de tu hogar.
                    </Text>
                </View>
                <View className="mb-4">
                    <Text className="text-lg text-gray-700">
                        Nuestros cines están equipados con la última tecnología para garantizar que tengas una experiencia inolvidable. Desde pantallas de alta definición hasta sistemas de sonido envolvente, tenemos todo lo que necesitas para disfrutar de tus películas favoritas.
                    </Text>
                </View>
                <View className="mb-4">
                    <Text className="text-lg text-gray-700">
                        Gracias por elegir nuestra aplicación de cine. ¡Esperamos que tengas un gran momento!
                    </Text>
                </View>
                <View className="mb-4">
                    <Text className="text-lg text-gray-700">
                        Esta es una aplicación de ejemplo de UNIR, la Universidad Internacional de La Rioja, para trabajar con React Native y aplicaciones multiplataforma.
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default AboutUs;