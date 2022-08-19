import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackList } from "../types/stack";
import DetailScreen from "../screens/DetailScreen";
import HomeScreen from "../screens/HomeScreen";
import AboutScreen from "./AboutScreen";
import AboutHeaderRight from "../components/header/AboutHeaderRight";

const Stack = createNativeStackNavigator<StackList>();

export default function StackScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="HomeScreen"
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
        <Stack.Screen
          name="AboutScreen"
          component={AboutScreen}
          options={{
            title: "About Binder",
            headerShown: true,
            headerTitleAlign: "center",
            headerRight: () => <AboutHeaderRight />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
