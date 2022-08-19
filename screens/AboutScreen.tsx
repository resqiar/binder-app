import { View, Text, Image } from "react-native";
import { APP_INFO } from "../constants/appInfo";

export default function AboutScreen() {
  return (
    <View>
      <View>
        <View className="items-center">
          <View className="bg-white w-6/12 mx-2 mt-8 mb-4 rounded-full shadow-2xl">
            <Image
              className="w-full h-[200px]"
              source={require("../assets/adaptive-icon.png")}
              resizeMode="cover"
            />
          </View>
        </View>

        <View className="px-4 py-8 bg-white my-4 mx-2 rounded-xl shadow-lg">
          <Text className="text-lg font-bold">What is Binder?</Text>
          <Text className="text-justify py-2 leading-6">
            Binder is an application platform to manage personal binder's
            extension. Basically when writing inside your Binder, you do not
            want to write the code manually, or print the image and deal with
            file - this is called extensions - so Binder app saves your
            extension in the database and give you an ID. That ID is what you
            write inside of your binder, instead of printing file or whatnot.
          </Text>
        </View>
      </View>

      <View className="mt-4">
        <Text className="text-center py-2">{APP_INFO.version}</Text>
        <Text className="text-center font-light">2022 - ResDev</Text>
        <Text className="text-center font-light mt-1">MIT Licensed</Text>
      </View>
    </View>
  );
}
