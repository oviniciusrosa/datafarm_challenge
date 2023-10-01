import Animated, { FadeInLeft } from "react-native-reanimated";
import styled from "styled-components/native";

export const Container = styled(Animated.View).attrs({ entering: FadeInLeft })`
  width: 100%;

  flex-direction: row;
  align-items: center;
  gap: 10px;

  background-color: ${({ theme }) => theme.colors.warning};
  border-radius: 4px;
  margin-bottom: 15px;

  padding: 10px;
`;

export const Message = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 12px;
  font-weight: 300;
`;

export const ErrorContentContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;
