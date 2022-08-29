import { View, Text, TouchableOpacity, Linking } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function DeniedCamera() {
  return (
    <View className="flex-1 items-center justify-center">
      <View className="flex flex-row px-12 items-center gap-4">
        <View>
          <Feather name="camera-off" size={24} color="black" />
        </View>

        <View>
          <Text>
            Camera permission has been denied, please allow to use the scanner.
          </Text>

          <TouchableOpacity
            onPress={() => {
              Linking.openSettings();
            }}
          >
            <View className="py-1 flex flex-row gap-2">
              <Text className="underline">Open settings</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
