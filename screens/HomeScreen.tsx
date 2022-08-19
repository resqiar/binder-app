import { useEffect, useState } from "react";
import MainStatusBar from "../components/miscs/MainStatusBar";
import ExtensionCard from "../components/card/ExtensionCard";
import HomeHeader from "../components/header/HomeHeader";
import { FlatList, View } from "react-native";
import { NavigationType } from "../types/navigation";
import { C_URL } from "../constants/url";
import { IData } from "../constants/data";

export default function HomeScreen(props: NavigationType<"HomeScreen">) {
  // State to store backend request data
  const [data, setData] = useState<IData[]>([]);

  async function fetchData() {
    try {
      // TIMEOUT TO SIMULATE NETWORK REQUEST
      setTimeout(async () => {
        const req = await fetch(`${C_URL.BACKEND_URL}/ext`);
        const res = await req.json();
        setData(res);
      }, 5000);
    } catch (error: any) {
      console.error(error.message);
    }
  }

  useEffect(() => {
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
