import { TextProps } from "react-native";
import { SubHeadingText } from "./styles";

export function SubHeading({ children, ...rest }: TextProps) {
  return <SubHeadingText {...rest}>{children}</SubHeadingText>;
}
