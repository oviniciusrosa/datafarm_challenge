import { TextInputProps } from "react-native";

export interface InputProps extends TextInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
}
