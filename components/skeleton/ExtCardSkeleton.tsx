import { View } from "react-native";
import { Placeholder, PlaceholderLine, Fade } from "rn-placeholder";
import NotFoundInfo from "../miscs/NotFoundInfo";

interface Props {
  count: number;
  compact?: boolean;
  isNotFound?: boolean;
}

export default function ExtCardSkeleton(props: Props) {
  if (props.isNotFound) return <NotFoundInfo />;

  return (
    <View>
      {[...new Array(props.count)].map((_v, i) => (
        <View key={i} className="bg-white mx-2 my-4 rounded-xl shadow-2xl">
          <Placeholder Animation={Fade}>
            {!props.compact ? (
              <PlaceholderLine
                height={250}
                noMargin={true}
                className="rounded-none rounded-t-xl mb-2"
              />
            ) : undefined}

            <View className="p-4">
              <PlaceholderLine width={20} height={15} />
              <PlaceholderLine width={80} height={20} />
              <PlaceholderLine />
              <PlaceholderLine width={70} />
              <PlaceholderLine width={60} />
            </View>
          </Placeholder>
        </View>
      ))}
    </View>
  );
}
