import { View } from "react-native";
import { Placeholder, PlaceholderLine, Fade } from "rn-placeholder";

export default function ExtCardSkeleton() {
  return (
    <View>
      <View className="bg-white mx-2 my-4 rounded-xl shadow-2xl">
        <Placeholder Animation={Fade}>
          <PlaceholderLine
            height={250}
            noMargin={true}
            className="rounded-none rounded-t-xl mb-2"
          />

          <View className="p-4">
            <PlaceholderLine width={20} height={15} />
            <PlaceholderLine width={80} height={20} />
            <PlaceholderLine />
            <PlaceholderLine width={70} />
            <PlaceholderLine width={60} />
          </View>
        </Placeholder>
      </View>

      <View className="bg-white mx-2 my-4 rounded-xl shadow-2xl">
        <Placeholder Animation={Fade}>
          <PlaceholderLine
            height={250}
            noMargin={true}
            className="rounded-none rounded-t-xl mb-2"
          />

          <View className="p-4">
            <PlaceholderLine width={20} height={15} />
            <PlaceholderLine width={80} height={20} />
            <PlaceholderLine />
            <PlaceholderLine width={70} />
            <PlaceholderLine width={60} />
          </View>
        </Placeholder>
      </View>
    </View>
  );
}
