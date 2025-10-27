import { Stack } from "expo-router";

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
                },
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
            <Stack.Screen name="landing/[id]/movies/[idMovie]/booking/index" options={({ route }) => ({
                title: `Selecciona tus asientos`,
                //animation: "fade_from_bottom"
            })}>
            </Stack.Screen>
        </Stack>
    )
}

export default StackLayout;