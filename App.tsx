import { TailwindProvider } from "tailwindcss-react-native";
import StackScreen from "./screens/StackScreen";

export default function App() {
  return (
    <TailwindProvider>
      <StackScreen />
    </TailwindProvider>
  );
}
