import {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { DefaultStyle } from "react-native-reanimated/lib/typescript/reanimated2/hook/commonTypes";
import theme from "~/theme";

const { colors } = theme;

type AnimatedStyle = [
  DefaultStyle,
  { initAnimation: VoidCallback; resetAnimation: VoidCallback }
];

export function useBorderColorAnimatedStyle(): AnimatedStyle {
  const sv = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      borderBottomColor: interpolateColor(
        sv.value,
        [0, 1],
        [colors.grey_80, colors.primary_300]
      ),
    };
  });

  function initAnimation() {
    sv.value = withTiming(1);
  }

  function resetAnimation() {
    sv.value = withTiming(0);
  }

  return [animatedStyle, { initAnimation, resetAnimation }];
}
