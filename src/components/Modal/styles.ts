import { Dimensions } from "react-native";
import Animated from "react-native-reanimated";
import styled from "styled-components/native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

export const ModalContainer = styled.Modal``;

export const Overlay = styled.Pressable`
  position: absolute;
  top: 0;
  left: 0;

  background-color: ${({ theme }) => theme.colors.overlay};
  width: ${SCREEN_WIDTH}px;
  height: ${SCREEN_HEIGHT}px;

  align-items: center;
  justify-content: center;
`;

export const Card = styled(Animated.View)`
  background-color: ${({ theme }) => theme.colors.white};

  min-width: 85%;
  padding: 20px;
  border-radius: 8px;
`;

export const ErrorTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.danger};
  margin-bottom: 5px;
`;
