import {router, Stack, useNavigation} from "expo-router";
import {DrawerActions, StackActions} from "@react-navigation/native";
import {Ionicons} from "@expo/vector-icons";

const StackLayout = () => {

    return (
        <Stack
            screenOptions={{
                headerShown: true,
                headerShadowVisible: false,

                headerStyle: {
                    backgroundColor: "#0096c3",
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontWeight: "bold",
                }
            }}
        >
            <Stack.Screen name="allTickets/index" options={{
                title: "Mis Entradas",
            }}>
            </Stack.Screen>
            <Stack.Screen name="allTickets/share/[id]/index" options={{
                title: `Compartir entrada`,
                headerBackTitle: "Entradas" // Necesario porque el nombre de la pantalla anterior es muy largo y se muestra 'Back' en lugar de 'Mis Entradas'
                //animation: "fade_from_bottom"
            }}>
            </Stack.Screen>
        </Stack>
    )
}

export default StackLayout;