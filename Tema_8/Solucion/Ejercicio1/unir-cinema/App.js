import {StatusBar} from 'expo-status-bar';
import {SafeAreaView, Text, View} from 'react-native';
import "./global.css";
import {useFonts} from "expo-font";
import CinemaButton from "./components/CinemaButton";
import * as Haptics from "expo-haptics";

export default function App() {

    const [fontsLoaded, error] = useFonts({
        'Rasa-VariableFont': require('./assets/fonts/Rasa-VariableFont.ttf')
    });

    if (!fontsLoaded && !error) return null;

    return (
        <SafeAreaView>
            <StatusBar style="auto"/>
            <View className="px-10 mt-5 bg-white-500 text-white">

                <Text className="text-center font-rasa-light text-4xl mb-10">UNIR Cinema</Text>
                <Text className="text-center font-rasa-light text-2xl mb-10">¿A qué cine deseas ir?</Text>

                <CinemaButton onPress={() => {
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                    console.log("Cine de Madrid");}
                }
                              onLongPress={() => console.log("Cine de Madrid - LongPress")}>
                    Madrid
                </CinemaButton>
                <CinemaButton onPress={() => {
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                    console.log("Cine de Barcelona");}
                }
                              onLongPress={() => console.log("Cine de Barcelona - LongPress")}>
                    Barcelona
                </CinemaButton>
                <CinemaButton onPress={() => {
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                    console.log("Cine de Valencia");}
                }
                              onLongPress={() => console.log("Cine de Valencia - LongPress")}>
                    Valencia
                </CinemaButton>
                <CinemaButton onPress={() => {
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                    console.log("Cine de Sevilla");}
                }
                              onLongPress={() => console.log("Cine de Sevilla - LongPress")}>
                    Sevilla
                </CinemaButton>
            </View>
        </SafeAreaView>
    );
}
