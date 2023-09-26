import Animated from "react-native-reanimated";
import styled from "styled-components/native";

export const Container = styled(Animated.View)`
  flex: 1;
  padding-top: 50px;
  padding-bottom: 25px;
  padding-horizontal: 30px;

  justify-content: space-between;
`;

export const Logo = styled.Image`
  width: 200px;
  height: 100px;
  align-self: center;

  margin-bottom: 50px;
`;

export const VersionText = styled.Text`
  color: ${({ theme }) => theme.colors.grey_80};
  align-self: center;
`;
