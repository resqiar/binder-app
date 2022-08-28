import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ScanQRButton() {
  return (
    <TouchableOpacity
      style={{
        paddingRight: 6,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowRadius: 3.84,
        shadowOpacity: 0.25,
      }}
      onPress={() => {}}
    >
      <Ionicons name="camera" size={24} color="black" />
    </TouchableOpacity>
  );
}
