import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { DefaultStyle } from "react-native-reanimated/lib/typescript/reanimated2/hook/commonTypes";
import theme from "~/theme";

type AnimatedStyle = [
  DefaultStyle,
  { initAnimation: VoidCallback; resetAnimation: VoidCallback }
];

export function usePositionAnimatedStyle(): AnimatedStyle {
  const rightPosition = useSharedValue(-250);

  const animatedStyle = useAnimatedStyle(() => ({
    right: rightPosition.value,
  }));

  function initAnimation() {
    rightPosition.value = withSpring(-50, {
      mass: 1,
      damping: 12,
      stiffness: 90,
    });
  }

  function resetAnimation() {
    rightPosition.value = withTiming(-250);
  }

  return [animatedStyle, { initAnimation, resetAnimation }];
}
