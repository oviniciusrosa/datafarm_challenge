import Animated from "react-native-reanimated";
import styled from "styled-components/native";

export const Container = styled(Animated.View)`
  position: absolute;
  top: 25px;

  width: 250px;
  height: 60px;

  z-index: 10;
  pointer-events: none;

  background-color: ${({ theme }) => theme.colors.secondary_500};
  border-radius: 8px;

  padding: 10px;
  justify-content: center;
`;

export const Label = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.white};
`;

export const FarmName = styled.Text``;

export const TimeText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
`;
