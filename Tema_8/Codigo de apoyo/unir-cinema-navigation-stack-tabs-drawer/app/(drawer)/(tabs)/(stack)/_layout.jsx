import {router, Stack, useNavigation} from "expo-router";
import {DrawerActions, StackActions} from "@react-navigation/native";
import {Ionicons} from "@expo/vector-icons";

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

                headerStyle: {
                    backgroundColor: "#0096c3",
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontWeight: "bold",
                },
                headerLeft: ({ canGoBack }) => <Ionicons
                    name={ canGoBack ? "arrow-back-outline" : "menu-outline"}
                    className="mr-5"
                    size={20}
                    onPress={() => onHeaderLeftPress(canGoBack)} />,
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

export default StackLayout;