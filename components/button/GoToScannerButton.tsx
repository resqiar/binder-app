import { TouchableOpacity, StatusBar } from "react-native";
import { NavigationType } from "../../types/navigation";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface Props {
  rn?: NavigationType<"DetailScreen">;
}

export default function GoToScannerButton(props: Props) {
  // Dynamic height calculated by device's statusBarHeight + 10
  const statusBarHeight = StatusBar.currentHeight ?? 0;

  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        top: statusBarHeight + 10,
        right: 10,
        backgroundColor: "#fff",
        position: "absolute",
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }}
      onPress={() => {
        if (!props.rn) return;
        return props.rn.navigation.navigate("ScannerScreen");
      }}
    >
      <MaterialCommunityIcons name="qrcode-scan" size={20} color="black" />
    </TouchableOpacity>
  );
}
