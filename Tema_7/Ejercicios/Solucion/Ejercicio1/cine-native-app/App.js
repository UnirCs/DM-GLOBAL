import {StatusBar} from 'expo-status-bar';
import {Text, View} from 'react-native';
import "./global.css";
import {useFonts} from "expo-font";

export default function App() {

    const [fontsLoaded, error] = useFonts({
        'Rasa-VariableFont': require('./assets/fonts/Rasa-VariableFont.ttf')
    });

    if (!fontsLoaded && !error) return null;

    return (
        <View className="bg-blue-500 text-white flex-1 items-center justify-center">
            <Text className="font-rasa-light">Jesus</Text>
            <Text>Perez</Text>
            <Text>Melero</Text>
            <StatusBar style="auto"/>
        </View>
    );
}
