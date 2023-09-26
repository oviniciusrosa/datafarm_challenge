import {
  interpolate,
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

export function useLabelAnimatedStyle(): AnimatedStyle {
  const activeControl = useSharedValue(0);
  const top = useSharedValue(10);
  const left = useSharedValue(5);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      top: top.value,
      left: left.value,
      color: interpolateColor(
        activeControl.value,
        [0, 1],
        [colors.grey_80, colors.primary_500]
      ),
      fontSize: interpolate(activeControl.value, [0, 1], [15, 12]),
    };
  });

  function initAnimation() {
    activeControl.value = withTiming(1);
    left.value = withTiming(0);
    top.value = withTiming(-8);
  }

  function resetAnimation() {
    activeControl.value = withTiming(0);
    left.value = withTiming(5);
    top.value = withTiming(10);
  }

  return [animatedStyle, { initAnimation, resetAnimation }];
}
