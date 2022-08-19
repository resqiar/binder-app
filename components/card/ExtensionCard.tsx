import { View, Text, Image, Pressable } from "react-native";
import { IData } from "../../constants/data";
import { NavigationType } from "../../types/navigation";

interface Props {
  value: IData;
  rn?: NavigationType<"HomeScreen">;
}

export default function ExtensionCard(props: Props) {
  return (
    <Pressable
      android_ripple={{ color: "#666" }}
      onPress={() => {
        if (!props.rn) return;
        return props.rn.navigation.navigate("DetailScreen", props.value);
      }}
    >
      <View className="bg-white mx-2 my-4 rounded-xl shadow-2xl">
        {props.value.image_url ? (
          <View className="h-[250px]">
            <Image
              className="w-full h-full rounded-t-xl"
              source={{
                uri: props.value.image_url,
              }}
            />
          </View>
        ) : undefined}

        <View className="px-3 py-4">
          {/* ID */}
          <Text className="text-lg font-bold">ID: {props.value.id}</Text>

          {/* TITLE */}
          <Text className="font-bold text-lg">{props.value.title}</Text>

          {/* OPTIONAL DESCRIPTION */}
          {props.value.description ? (
            <Text className="text-justify" numberOfLines={4}>
              {props.value.description}
            </Text>
          ) : undefined}
        </View>
      </View>
    </Pressable>
  );
}
