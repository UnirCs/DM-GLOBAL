import React from 'react';
import { View, Text, ScrollView, SafeAreaView, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const AboutUs = () => {
    const router = useRouter();

    const handleBackPress = () => {
        router.push('/home', { animation: 'slide-right' });
    };

    return (
        <SafeAreaView className="flex-1">
            <ScrollView className="flex-1 p-5 mx-5">
                <View className="flex-row items-center mb-5 justify-center">
                    <Pressable onPress={handleBackPress} className="absolute left-0">
                        <Ionicons name="chevron-back" size={24} color="#0096c3" />
                    </Pressable>
                    <Text className="text-2xl font-bold text-center text-unirLogoBg">Sobre Nosotros</Text>
                </View>
                <View className="mb-4">
                    <Text className="text-lg">
                        ¡Bienvenido a nuestra aplicación de cine! Estamos dedicados a proporcionar la mejor experiencia cinematográfica para nuestros clientes. Nuestra aplicación te permite navegar fácilmente por las películas, seleccionar tus asientos y comprar entradas desde la comodidad de tu hogar.
                    </Text>
                </View>
                <View className="mb-4">
                    <Text className="text-lg">
                        Nuestros cines están equipados con la última tecnología para garantizar que tengas una experiencia inolvidable. Desde pantallas de alta definición hasta sistemas de sonido envolvente, tenemos todo lo que necesitas para disfrutar de tus películas favoritas.
                    </Text>
                </View>
                <View className="mb-4">
                    <Text className="text-lg">
                        Gracias por elegir nuestra aplicación de cine. ¡Esperamos que tengas un gran momento!
                    </Text>
                </View>
                <View className="mb-4">
                    <Text className="text-lg">
                        Esta es una aplicación de ejemplo de UNIR, la Universidad Internacional de La Rioja, para trabajar con React Native y aplicaciones multiplataforma.
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default AboutUs;