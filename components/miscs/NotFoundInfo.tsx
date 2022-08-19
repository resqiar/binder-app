import { View, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function NotFoundInfo() {
  return (
    <View className="items-center bg-white shadow-2xl rounded-xl mx-2 my-4 p-4">
      <View className="py-4">
        <Entypo name="emoji-sad" size={150} color="rgb(75, 85, 99)" />
      </View>
      <Text className="text-2xl font-bold">Extension Not Found</Text>
      <Text className="text-center py-3">
        Try check the id of the extension, the id might be wrong or misspelled.
      </Text>
    </View>
  );
}
