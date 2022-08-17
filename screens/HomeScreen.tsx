import { Button, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackList } from "../types/StackList";

type Props = NativeStackScreenProps<StackList, "HomeScreen">;

export default function HomeScreen(props: Props) {
  return (
    <View className="flex-1 justify-center items-center">
      <Button
        title="Go To Detail"
        onPress={() => props.navigation.push("DetailScreen")}
      />
    </View>
  );
}
