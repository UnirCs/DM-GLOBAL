import React from 'react';
import {useLocalSearchParams} from "expo-router";
import {Text, View} from "react-native";

const CinemaLanding = () => {

    const { id } = useLocalSearchParams();

    return (
        <View className="px-5 mt-2">
            <Text className="text-2xl">{id}</Text>
        </View>
    );
}

export default CinemaLanding;