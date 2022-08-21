import { LinkingOptions, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackList } from "../types/stack";
import DetailScreen from "../screens/DetailScreen";
import HomeScreen from "../screens/HomeScreen";
import AboutScreen from "./AboutScreen";
import AboutHeaderRight from "../components/header/AboutHeaderRight";
import * as Linking from "expo-linking";

const Stack = createNativeStackNavigator<StackList>();

// Prefix linking
const prefixLinking = Linking.createURL("/");

export default function StackScreen() {
  // LinkingOptions passes into NavigationContainer
  const link: LinkingOptions<StackList> = {
    prefixes: [prefixLinking],
    config: {
      screens: {
        HomeScreen: "home",
        AboutScreen: "about",
      },
    },
  };

  return (
    <NavigationContainer linking={link}>
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
