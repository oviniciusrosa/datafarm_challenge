import { StyleProp, TextInputProps, TextStyle, ViewStyle } from "react-native";

export interface InputProps extends TextInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  style?: StyleProp<ViewStyle> | undefined;
  inputStyle?: StyleProp<TextStyle> | undefined;
  SuffixIcon?: () => React.JSX.Element;
}
