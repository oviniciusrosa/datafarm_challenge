import { Path, Svg } from "react-native-svg";
import theme from "~/theme";

interface Props {
  path: string;
  width?: number;
  height?: number;
  color?: string;
}

const DEFAULT_SIZE = 32;

export function Icon({ path, color, width, height }: Props) {
  return (
    <Svg
      width={width ?? DEFAULT_SIZE}
      height={height ?? DEFAULT_SIZE}
      viewBox="0 0 1024 1024">
      <Path d={path} fill={color ?? theme.colors.grey_80} />
    </Svg>
  );
}
