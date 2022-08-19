import { View, Text, Pressable, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import SearchInput from "../input/SearchInput";
import { NavigationType } from "../../types/navigation";

interface Props {
  rn?: NavigationType<"HomeScreen">;
  onChangeText: (text: string) => void;
  onSubmitEditing: () => void;
  isLoading?: boolean;
}

export default function HomeHeader(props: Props) {
  return (
    <View>
      <View className="flex flex-row px-4 py-5">
        <Text className="flex-1 font-bold text-xl text-white">Binder</Text>
        <Pressable
          android_ripple={{
            color: "#666",
            borderless: true,
          }}
          onPress={() => {
            if (!props.rn) return;
            return props.rn.navigation.navigate("AboutScreen");
          }}
        >
          <Ionicons
            style={{ paddingLeft: 10, color: "#fff" }}
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
        <Text className="font-bold text-lg text-slate-200">
          Looking for an extension?
        </Text>
      </View>

      <View className="px-3 mt-2 mb-6">
        <SearchInput
          onChangeText={props.onChangeText}
          onSubmitEditing={props.onSubmitEditing}
          isLoading={props.isLoading}
        />
      </View>
    </View>
  );
}
