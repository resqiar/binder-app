import { Linking, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { APP_INFO } from "../../constants/appInfo";

export default function AboutHeaderRight() {
  async function handleGoToRepo() {
    await Linking.openURL(APP_INFO.repoUrl);
  }

  return (
    <Pressable
      android_ripple={{
        color: "#666",
        borderless: true,
      }}
      onPress={handleGoToRepo}
    >
      <Ionicons name="md-logo-github" size={24} color="black" />
    </Pressable>
  );
}
