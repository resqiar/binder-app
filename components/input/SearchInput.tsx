import { View, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  onChangeText: (text: string) => void;
  onSubmitEditing: () => void;
}

export default function SearchInput(props: Props) {
  return (
    <View className="flex flex-row items-center bg-gray-300 px-2 rounded-full shadow-lg">
      <View className="px-1">
        <Ionicons name="search" size={25} />
      </View>
      <TextInput
        className="p-2 flex-1"
        keyboardType="numeric"
        placeholder="Search id..."
        placeholderTextColor="rgb(148, 163, 184)"
        onChangeText={props.onChangeText}
        onSubmitEditing={props.onSubmitEditing}
      />
    </View>
  );
}
