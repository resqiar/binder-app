import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackList } from "./stack";

export type NavigationType<T extends keyof StackList> = NativeStackScreenProps<
  StackList,
  T
>;
