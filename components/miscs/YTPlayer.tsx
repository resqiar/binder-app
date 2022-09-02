import { View } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import { Dimensions } from "react-native";
import getYouTubeID from "get-youtube-id";

interface Props {
  url: string;
}

export default function YTPlayer(props: Props) {
  const height = (Dimensions.get("window").width / 16) * 9;
  const id = getYouTubeID(props.url);

  if (!id) return <View />;

  return (
    <View className="pt-7 w-full">
      <YoutubePlayer height={height} videoId={id} />
    </View>
  );
}
