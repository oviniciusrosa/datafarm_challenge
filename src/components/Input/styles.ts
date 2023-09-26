import styled from "styled-components/native";

import { Dimensions } from "react-native";
import Animated from "react-native-reanimated";

const SCREEN_WIDTH = Dimensions.get("screen").width;
const SCREEN_HEIGHT = Dimensions.get("screen").height;

export const InputWrapper = styled(Animated.View)`
  position: static;
  margin-vertical: 5px;

  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.grey_80};
  z-index: 2;
`;

export const InputContainer = styled.TextInput`
  padding: 5px;
`;

export const Label = styled(Animated.Text)`
  position: absolute;
`;

export const TouchableArea = styled.Pressable`
  position: absolute;
  width: ${SCREEN_WIDTH}px;
  height: ${SCREEN_HEIGHT}px;

  flex: 1;
  z-index: 1;
`;

export const PasswordWrapper = styled.View`
  position: static;
`;

export const TouchableSuffix = styled.TouchableOpacity`
  position: absolute;
  right: 5px;
  bottom: 0px;

  justify-content: center;
  align-items: center;

  height: 100%;
  width: 30px;

  z-index: 2;
`;
