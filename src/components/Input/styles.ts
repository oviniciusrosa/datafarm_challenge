import styled from "styled-components/native";

import { Dimensions } from "react-native";
import { InputContainerProps } from "./@types";
import Animated from "react-native-reanimated";

const SCREEN_WIDTH = Dimensions.get("screen").width;
const SCREEN_HEIGHT = Dimensions.get("screen").height;

export const InputWrapper = styled(Animated.View)`
  margin-bottom: 10px;

  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.grey_80};
`;

export const InputContainer = styled.TextInput<InputContainerProps>`
  padding: 5px;
`;

export const Label = styled(Animated.Text)`
  position: absolute;
`;

export const TouchableArea = styled.TouchableOpacity`
  position: absolute;
  width: ${SCREEN_WIDTH}px;
  height: ${SCREEN_HEIGHT}px;

  flex: 1;
  z-index: 100;
`;
