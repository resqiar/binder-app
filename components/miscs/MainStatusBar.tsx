import { StatusBar } from "react-native";
import { COLOR_CONSTANT } from "../../constants/color";

export default function MainStatusBar() {
  return (
    <StatusBar animated={true} backgroundColor={COLOR_CONSTANT.statusbar} />
  );
}
