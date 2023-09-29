import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import styled from "styled-components/native";

export const OverlayWrapper = styled.Pressable`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
`;

// TODO: Verificar renderizacao
export const Overlay = styled(Animated.View).attrs({
  entering: FadeIn.duration(400),
  // exiting: FadeOut.duration(100),
})`
  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.colors.overlay};
`;
