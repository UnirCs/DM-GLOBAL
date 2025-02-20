import {Stack} from "expo-router";

const StackLayout = () => {
    return (
        <Stack
            screenOptions={{
                headerShown: true,
                headerShadowVisible: false,

                headerStyle: {
                    backgroundColor: "#f4511e",
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
            <Stack.Screen name="landing/[id]" options={({ route }) => ({
                title: `${route.params.id}`,
                //animation: "fade_from_bottom"
            })}>
            </Stack.Screen>
        </Stack>
    )
}

export default StackLayout;