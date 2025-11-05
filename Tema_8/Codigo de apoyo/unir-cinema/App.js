import {StatusBar} from 'expo-status-bar';
import {Text, View} from 'react-native';
import "./global.css";
import {useFonts} from "expo-font";
import CinemaButton from "./components/CinemaButton";
import * as Haptics from "expo-haptics";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {

    const [fontsLoaded, error] = useFonts({
        'Rasa-VariableFont': require('./assets/fonts/Rasa-VariableFont.ttf')
    });

    if (!fontsLoaded && !error) return null;

    return (
        <SafeAreaView>
            <View className="px-10 mt-5 bg-white-500 text-white">
                <StatusBar style="dark"/>
                <Text className="text-center font-rasa-light text-4xl mb-10">UNIR Cinema</Text>
                <Text className="text-center font-rasa-light text-2xl mb-10">¿A qué cine deseas ir?</Text>

                <CinemaButton onPress={() => {
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                    console.log("Cine de Madrid");}
                } onLongPress={() => console.log("Cine de Madrid - LongPress")}>
                    Madrid
                </CinemaButton>
                <CinemaButton onPress={() => console.log("Cine de Barcelona")}
                              onLongPress={() => console.log("Cine de Barcelona - LongPress")}>
                    Barcelona
                </CinemaButton>
            </View>
        </SafeAreaView>
    );
}
