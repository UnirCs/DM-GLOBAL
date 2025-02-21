import React from 'react';
import {Pressable, Text} from "react-native";

const CinemaButton = React.forwardRef(({color = "bg-blue-500", onPress, onLongPress, children}, ref) => {

        return (
            <Pressable
                className={`p-3 rounded-md mb-2 ${color} active:opacity-90`}
                onPress={onPress}
                onLongPress={onLongPress}
                ref={ref}
            >
                <Text className="text-white text-center font-rasa-light text-xl">
                    {children}
                </Text>
            </Pressable>
        );
    }
);

export default CinemaButton;