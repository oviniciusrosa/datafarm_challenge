import { StyleProp, ViewStyle } from "react-native";

export interface IOption {
  label: string;
  extra?: string | number;
  value: string | number;
}

export interface Props {
  label: string;
  defaultValue?: IOption | null;
  onChange: (selectedOption: IOption) => void;
  style?: StyleProp<ViewStyle> | undefined;
  options: IOption[];
}
