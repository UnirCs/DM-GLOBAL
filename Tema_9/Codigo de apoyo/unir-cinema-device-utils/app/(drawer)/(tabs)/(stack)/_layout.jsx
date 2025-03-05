import {router, Stack, useNavigation} from "expo-router";
import {DrawerActions, StackActions} from "@react-navigation/native";
import {Ionicons} from "@expo/vector-icons";
import {Pressable} from "react-native";

const StackLayout = () => {

    const navigation = useNavigation();
    const onHeaderLeftPress = (canGoBack) => {
        if (canGoBack) {
            router.back();
            return;
        }
        navigation.dispatch(DrawerActions.toggleDrawer);
    }

    return (
        <Stack
            screenOptions={{
                headerShown: true,
                headerShadowVisible: true,
                contentStyle:{backgroundColor: "white"}, //Prueba a cambiar el color de fondo, veras que pasa

                headerStyle: {backgroundColor: "#0096c3",},
                headerTintColor: "white",
                //headerTitleStyle: {fontWeight: "bold",},
                headerLeft: ({canGoBack}) => (
                    <Pressable onPress={() => onHeaderLeftPress(canGoBack)}>
                        <Ionicons
                            name={canGoBack ? "chevron-back-outline" : "menu-outline"}
                            color={"white"}
                            className="mr-5"
                            size={20}/>
                    </Pressable>),
            }}
        >
            <Stack.Screen name="home/index" options={{
                title: "Inicio",
            }}>
            </Stack.Screen>
            <Stack.Screen name="landing/[id]/index" options={({route}) => ({
                title: `${route.params.id}`,
                //animation: "fade_from_bottom"
            })}>
            </Stack.Screen>
            <Stack.Screen name="landing/[id]/movies/[idMovie]/index" options={({route}) => ({
                title: `${route.params.idMovie}`,
                //animation: "fade_from_bottom"
            })}>
            </Stack.Screen>
            <Stack.Screen name="landing/[id]/movies/[idMovie]/booking/[idSession]/index" options={({route}) => ({
                title: `Selecciona tus asientos`,
                //animation: "fade_from_bottom"
            })}>
            </Stack.Screen>
        </Stack>
    )
}

export default StackLayout;