import Animated, { FadeIn } from "react-native-reanimated";
import styled from "styled-components/native";

export const Container = styled(Animated.View).attrs({
  entering: FadeIn,
})`
  background-color: ${({ theme }) => theme.colors.primary_300};
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  width: 200px;
  height: 100px;

  margin-bottom: 50px; /* Compensacao visual */
`;
