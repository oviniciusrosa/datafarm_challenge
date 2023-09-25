import { TextProps } from "react-native";
import { HeadingText } from "./styles";

export function Heading({ children, ...rest }: TextProps) {
  return <HeadingText {...rest}>{children}</HeadingText>;
}
