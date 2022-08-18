import { FlatList, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackList } from "../types/StackList";
import MainStatusBar from "../components/miscs/MainStatusBar";
import ExtensionCard from "../components/card/ExtensionCard";
import { mockup } from "../constants/mockup";

type Props = NativeStackScreenProps<StackList, "HomeScreen">;

export default function HomeScreen(_props: Props) {
  return (
    <View className="flex-1">
      {/* CUSTOM STATUS BAR */}
      <MainStatusBar />

      {/* BODY HERE */}
      <View>
        {/* CARD COMPONENT LIST */}
        <View className="z-10">
          <FlatList
            data={mockup}
            renderItem={({ item }) => <ExtensionCard value={item} />}
            keyExtractor={(i) => i.id.toString()}
          />
        </View>

        {/* BACKGROUND COMPONENT */}
        <View className="absolute top-0 bottom-0 right-0 left-0">
          <View className="bg-neutral-800 h-[300px]" />
        </View>
      </View>
    </View>
  );
}
