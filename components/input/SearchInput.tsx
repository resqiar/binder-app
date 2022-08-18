import { View, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SearchInput() {
  return (
    <View className="flex flex-row items-center bg-gray-300 px-2 rounded-full">
      <View className="px-1">
        <Ionicons name="search" size={25} color="#ddd" />
      </View>
      <TextInput
        className="p-2 text-slate-50 flex-1"
        keyboardType="numeric"
        placeholder="Search id..."
        placeholderTextColor="rgb(148, 163, 184)"
      />
    </View>
  );
}
