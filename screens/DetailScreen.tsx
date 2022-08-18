import { useState } from "react";
import {
  View,
  Text,
  StatusBar,
  Image,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { IMockup } from "../constants/mockup";
import { NavigationType } from "../types/navigation";
import { Ionicons } from "@expo/vector-icons";
import ImageView from "react-native-image-viewing";

export default function DetailScreen(props: NavigationType<"DetailScreen">) {
  // Data passed from parent component
  const data: IMockup = props.route.params;
  const statusBarHeight = StatusBar.currentHeight ?? 0;

  // State to control the fullscreen-image visibility
  const [visible, setIsVisible] = useState(false);

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
            <>
              {/* THUMBNAIL IMAGE */}
              <Pressable onPress={() => setIsVisible(true)}>
                <Image
                  className="w-full h-full"
                  source={{ uri: data.image_url }}
                  resizeMode="cover"
                />
              </Pressable>

              {/* FULLSCREEN IMAGE */}
              <ImageView
                images={[{ uri: data.image_url }]}
                imageIndex={0}
                visible={visible}
                presentationStyle="overFullScreen"
                swipeToCloseEnabled={false}
                animationType="slide"
                onRequestClose={() => setIsVisible(false)}
              />
            </>
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
