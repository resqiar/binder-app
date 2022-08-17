import { Alert, Platform, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function HomeHeaderRight() {
  return (
    <Pressable
      android_ripple={{
        color: "#666",
        borderless: true,
      }}
      onPress={() =>
        Alert.alert(
          "App Status Info",
          "This app status is still in the early stage of development"
        )
      }
    >
      <Ionicons
        style={{ paddingLeft: 10 }}
        name={
          Platform.OS === "ios"
            ? "ios-information-circle-outline"
            : "md-information-circle-outline"
        }
        size={25}
      />
    </Pressable>
  );
}
