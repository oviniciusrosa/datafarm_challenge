import {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { DefaultStyle } from "react-native-reanimated/lib/typescript/reanimated2/hook/commonTypes";

type AnimatedStyle = [DefaultStyle, { initAnimation: VoidCallback }];

export function useShakeAnimatedStyle(): AnimatedStyle {
  const shake = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: shake.value,
      },
    ],
  }));

  function initAnimation() {
    shake.value = withSequence(
      withTiming(15, { duration: 75 }),
      withTiming(-15, { duration: 75 }),
      withTiming(15, { duration: 75 }),
      withTiming(-15, { duration: 75 }),
      withSpring(0, { damping: 50, stiffness: 500, mass: 2.8 })
    );
  }

  return [animatedStyle, { initAnimation }];
}
