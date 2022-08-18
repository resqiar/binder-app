import {
  View,
  Text,
  StatusBar,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { IMockup } from "../constants/mockup";
import { NavigationType } from "../types/navigation";
import { Ionicons } from "@expo/vector-icons";

export default function DetailScreen(props: NavigationType<"DetailScreen">) {
  // Data passed from parent component
  const data: IMockup = props.route.params;
  const statusBarHeight = StatusBar.currentHeight ?? 0;

  return (
    <ScrollView className="flex-1">
      <StatusBar
        barStyle="dark-content"
        animated={true}
        translucent={true}
        backgroundColor="transparent"
      />

      <View>
        <View className="pb-2 w-full max-h-[400px]">
          {/* IMAGE */}
          {data.image_url ? (
            <Image
              className="w-full h-full"
              source={{ uri: data.image_url }}
              resizeMode="cover"
            />
          ) : undefined}

          {/* BACK NAVIGATION BUTTON */}
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              top: statusBarHeight + 10,
              left: 10,
              backgroundColor: "#fff",
              position: "absolute",
              borderRadius: 100,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => props.navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={20} />
          </TouchableOpacity>
        </View>

        <View className="px-3 py-4">
          {/* ID */}
          <View>
            <Text className="text-lg font-bold">ID: {data.id}</Text>
          </View>

          {/* TITLE */}
          <View className="pt-2 pb-4">
            <Text className="font-bold text-xl">{data.title}</Text>

            {/* OPTIONAL DESCRIPTION */}
            {data.description ? (
              <Text className="text-justify mt-2 leading-6">
                {data.description}
              </Text>
            ) : undefined}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
