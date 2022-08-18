import MainStatusBar from "../components/miscs/MainStatusBar";
import ExtensionCard from "../components/card/ExtensionCard";
import HomeHeader from "../components/header/HomeHeader";
import { FlatList, View } from "react-native";
import { NavigationType } from "../types/navigation";
import { mockup } from "../constants/mockup";

export default function HomeScreen(props: NavigationType<"HomeScreen">) {
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
            renderItem={({ item }) => <ExtensionCard rn={props} value={item} />}
            keyExtractor={(i) => i.id.toString()}
            ListHeaderComponent={HomeHeader}
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
