import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NavigationType } from "../../types/navigation";

interface Props {
  rn?: NavigationType<any>;
}

export default function ScanQRButton(props: Props) {
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
      onPress={() => {
        if (!props.rn) return;
        return props.rn.navigation.navigate("ScannerScreen");
      }}
    >
      <Ionicons name="camera" size={24} color="black" />
    </TouchableOpacity>
  );
}
