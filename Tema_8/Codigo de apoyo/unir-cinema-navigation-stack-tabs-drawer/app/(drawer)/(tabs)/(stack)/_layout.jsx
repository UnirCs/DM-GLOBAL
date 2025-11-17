import {router, Stack, useNavigation} from "expo-router";
import {DrawerActions} from "@react-navigation/native";
import {Ionicons} from "@expo/vector-icons";
import {Pressable, StyleSheet, TouchableOpacity} from "react-native";

const StackLayout = () => {

    const navigation = useNavigation();
    const onHeaderLeftPress = (canGoBack) => {
        if(canGoBack) {
            router.back();
            return;
        }
        navigation.dispatch(DrawerActions.toggleDrawer);
    }

    return (
        <Stack
            screenOptions={{
                headerShown: true,
                headerShadowVisible: false,
                headerBackVisible: true, // Desactiva el botón de back nativo

                headerStyle: {
                    backgroundColor: "#0096c3",
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontWeight: "bold",
                },
                headerLeft: ({ canGoBack }) =>
                    canGoBack ? null :
                    <Pressable
                        style={styles.headerButton}
                        onPress={() => onHeaderLeftPress(canGoBack)}
                    >
                        <Ionicons
                            name={"menu-outline"}
                            size={24}
                            color="#fff"
                        />
                    </Pressable>
            }}
        >
            <Stack.Screen name="home/index" options={{
                title: "Inicio"
            }}>
            </Stack.Screen>
            <Stack.Screen name="landing/[id]/index" options={({ route }) => ({
                title: `${route.params.id}`,
                //animation: "fade_from_bottom"
            })}>
            </Stack.Screen>
            <Stack.Screen name="landing/[id]/movies/[idMovie]/index" options={({ route }) => ({
                title: `${route.params.idMovie}`,
                //animation: "fade_from_bottom"
            })}>
            </Stack.Screen>
            <Stack.Screen name="landing/[id]/movies/[idMovie]/booking/[idSession]/index" options={({ route }) => ({
                title: `Selecciona tus asientos`,
                //animation: "fade_from_bottom"
            })}>
            </Stack.Screen>
        </Stack>
    )
}

const styles = StyleSheet.create({
    headerButton: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 0,
    }
});

export default StackLayout;