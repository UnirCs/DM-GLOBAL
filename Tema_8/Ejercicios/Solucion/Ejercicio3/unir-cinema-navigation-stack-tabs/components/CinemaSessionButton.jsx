import React from 'react';
import {Pressable, Text, View} from "react-native";

const CinemaButton = ({ session, language, color = "bg-unirButtonBg", onPress, onLongPress}) => {

    return (
        <Pressable
            className="p-3 mb-2 border-blue-800 border active:opacity-90 mx-2 max-w-7xl min-w-4"
            style={{clip: "polygon(0 0, 100% 0, 90% 100%, 0% 100%)"}}
            onPress={onPress}
            onLongPress={onLongPress}
        >
            <View className=" mx-2">
                <View className="justify-end">
                    <Text className="text-black text-center">
                        {session}
                    </Text>
                </View>

                <View className="whitespace-nowrap">
                    <Text className="text-center">{language.toUpperCase()}</Text>
                </View>
            </View>
        </Pressable>
    );
}

export default CinemaButton;