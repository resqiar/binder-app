import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { NavigationType } from "../types/navigation";
import { C_URL } from "../constants/url";
import { IData } from "../constants/data";
import MainStatusBar from "../components/miscs/MainStatusBar";
import ExtensionCard from "../components/card/ExtensionCard";
import HomeHeader from "../components/header/HomeHeader";
import ExtCardSkeleton from "../components/skeleton/ExtCardSkeleton";

export default function HomeScreen(props: NavigationType<"HomeScreen">) {
  // State to store backend request data
  const [data, setData] = useState<IData[]>([]);

  async function fetchData() {
    try {
      // Fetch data from the server.
      // Whenever data is available,
      // push them to the defined state.
      const req = await fetch(`${C_URL.BACKEND_URL}/ext`);
      const res = await req.json();
      setData(res);
    } catch (error: any) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    // As soon as the component mounted,
    // fetch data from the server.
    fetchData();
  }, []);

  return (
    <View className="flex-1">
      {/* CUSTOM STATUS BAR */}
      <MainStatusBar />

      {/* BODY HERE */}
      <View>
        {/* CARD COMPONENT LIST */}
        <View className="z-10">
          <FlatList
            data={data}
            renderItem={({ item }) => <ExtensionCard rn={props} value={item} />}
            keyExtractor={(i) => i.id.toString()}
            ListHeaderComponent={HomeHeader}
            ListEmptyComponent={ExtCardSkeleton}
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
