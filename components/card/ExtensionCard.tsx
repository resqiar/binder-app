import { View, Text, Image } from "react-native";
import { IMockup } from "../../constants/mockup";

interface Props {
  value: IMockup;
}

export default function ExtensionCard(props: Props) {
  return (
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

      <View className="px-2 py-4">
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
  );
}
