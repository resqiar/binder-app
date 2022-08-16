import { Button, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackList } from "../types/StackList";

type Props = NativeStackScreenProps<StackList, "HomeScreen">;

export default function HomeScreen(props: Props) {
  return (
    <View>
      <Button
        title="Go To Detail"
        onPress={() => props.navigation.push("DetailScreen")}
      />
    </View>
  );
}
