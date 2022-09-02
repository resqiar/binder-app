import { useState } from "react";
import {
  View,
  Text,
  StatusBar,
  Image,
  ScrollView,
  Pressable,
  TouchableOpacity,
  Linking,
} from "react-native";
import { NavigationType } from "../types/navigation";
import ImageView from "react-native-image-viewing";
import BackButton from "../components/button/BackButton";
import { IData } from "../constants/data";
import GoToScannerButton from "../components/button/GoToScannerButton";
import YTPlayer from "../components/miscs/YTPlayer";
import { Ionicons } from "@expo/vector-icons";

export default function DetailScreen(props: NavigationType<"DetailScreen">) {
  // Data passed from parent component
  const data: IData = props.route.params;

  // State to control the fullscreen-image visibility
  const [visible, setIsVisible] = useState(false);

  return (
    <ScrollView className="flex-1">
      <StatusBar
        barStyle="light-content"
        animated={true}
        translucent={true}
        backgroundColor="transparent"
      />

      <View>
        <View className="w-full max-h-[400px]">
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

          {/* YOUTUBE PLAYER */}
          {data.youtube_url ? (
            <View>
              <YTPlayer url={data.youtube_url} />
            </View>
          ) : undefined}

          {/* BACK NAVIGATION BUTTON */}
          <BackButton rn={props} />

          {/* GO TO SCANNER BUTTON */}
          <GoToScannerButton rn={props} />
        </View>

        <View className="bg-white px-4 py-6 rounded-b-2xl shadow-2xl">
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

        {/* OPEN VIDEO INSIDE YOUTUBE NATIVE APP */}
        {data.youtube_url ? (
          <View className="flex px-4 my-6">
            <TouchableOpacity
              style={{
                width: "60%",
                backgroundColor: "#fff",
                borderRadius: 100,
                alignItems: "center",
                justifyContent: "center",
                elevation: 5,
                paddingVertical: 12,
                display: "flex",
                flexDirection: "row",
              }}
              onPress={() => {
                if (!data.youtube_url) return;
                Linking.openURL(data.youtube_url);
              }}
            >
              <Ionicons name="logo-youtube" size={20} color="red" />
              <Text className="ml-3 text-sm">Play inside YouTube</Text>
            </TouchableOpacity>
          </View>
        ) : undefined}
      </View>
    </ScrollView>
  );
}
