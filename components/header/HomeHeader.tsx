import { View, Text, Pressable, Alert, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import SearchInput from "../input/SearchInput";

export default function HomeHeader() {
  return (
    <View>
      <View className="flex flex-row px-4 py-5">
        <Text className="flex-1 font-bold text-xl">Binder</Text>
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
      </View>

      <View className="px-4 mb-4">
        <Text className="text-slate-300">Welcome back, 🤓😎!</Text>
        <Text className="font-bold text-lg">Looking for an extension?</Text>
      </View>

      <View className="px-3 mt-2 mb-6">
        <SearchInput />
      </View>
    </View>
  );
}
