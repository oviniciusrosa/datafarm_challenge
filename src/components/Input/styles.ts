import styled from "styled-components/native";

import { Dimensions } from "react-native";
import { InputContainerProps } from "./@types";

const SCREEN_WIDTH = Dimensions.get("screen").width;
const SCREEN_HEIGHT = Dimensions.get("screen").height;

export const InputWrapper = styled.View`
  margin-bottom: 10px;
`;

export const InputContainer = styled.TextInput<InputContainerProps>`
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme, focused }) =>
    focused ? theme.colors.primary_300 : theme.colors.grey_80};

  padding: 5px;
`;

export const TouchableArea = styled.TouchableOpacity`
  position: absolute;
  width: ${SCREEN_WIDTH}px;
  height: ${SCREEN_HEIGHT}px;

  flex: 1;
  z-index: 100;
`;
