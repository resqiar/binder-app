import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { NavigationType } from "../types/navigation";
import { fetchAllData, fetchSpecific } from "../libs/fetchData";
import { IData } from "../constants/data";
import MainStatusBar from "../components/miscs/MainStatusBar";
import ExtensionCard from "../components/card/ExtensionCard";
import HomeHeader from "../components/header/HomeHeader";
import ExtCardSkeleton from "../components/skeleton/ExtCardSkeleton";

export default function HomeScreen(props: NavigationType<"HomeScreen">) {
  // State to store backend request data
  const [data, setData] = useState<IData[]>([]);

  useEffect(() => {
    // As soon as the component mounted,
    // fetch data from the server.
    fetchAllData({
      setData: setData,
    });
  }, []);

  // State to keep track of user search text
  const [search, setSearch] = useState<string | undefined>();

  // When server give 404 message, this state will be updated
  const [notFound, setNotFound] = useState<boolean>(false);

  // When the data is fetching from the server,
  // update the loading state to display ActivityIndicator.
  const [loading, setLoading] = useState<boolean>(false);

  async function onSearch() {
    // If there is no search text provided,
    // fallback the data to the initial state.
    if (!search)
      return await fetchAllData({
        setData: setData,
      });

    // Set loading state to true
    setLoading(true);

    // Fetch specific data with id
    // to the server, when found, update the data state,
    // otherwise the not found state will be set to true.
    // @see libs/fetchData.ts
    await fetchSpecific({
      searchText: search,
      setData: setData,
      setNotFound: setNotFound,
    });

    // Set loading state to false
    setLoading(false);
  }

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
            ListHeaderComponent={
              <HomeHeader
                onChangeText={(text) => setSearch(text)}
                onSubmitEditing={onSearch}
                isLoading={loading}
              />
            }
            ListEmptyComponent={<ExtCardSkeleton isNotFound={notFound} />}
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
