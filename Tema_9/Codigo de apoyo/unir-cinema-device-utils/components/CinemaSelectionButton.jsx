import React from 'react';
import { Pressable, Text, View, Image } from 'react-native';
import {FontAwesome6, MaterialIcons} from "@expo/vector-icons";

const CinemaSelectionButton = ({ onPress, onLongPress, children, icon }) => {
    return (
        <Pressable
            onPress={onPress}
            onLongPress={onLongPress}
            className="flex-1 m-2 p-4 border border-[#0096c3] rounded-lg items-center"
        >
            <Text className="text-lg font-bold text-[#0096c3] mb-2">{children}</Text>
            <FontAwesome6 name={icon} size={24} color="#0096c3" />
        </Pressable>
    );
};

export default CinemaSelectionButton;