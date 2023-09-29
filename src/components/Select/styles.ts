import Animated from "react-native-reanimated";
import styled from "styled-components/native";

export const InputWrapper = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  margin-vertical: 5px;

  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.grey_80};

  width: 100%;
`;

export const InputContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  min-height: 38px;
`;

export const InputContainer = styled.View`
  padding: 5px;
`;

export const Label = styled(Animated.Text)`
  position: absolute;
  color: ${({ theme }) => theme.colors.grey_80};
`;

export const SelectedLabel = styled.Text`
  color: ${({ theme }) => theme.colors.grey_80};
  font-size: 14px;
  font-weight: 500;
`;

export const SelectedExtra = styled.Text`
  color: ${({ theme }) => theme.colors.grey_50};
  font-size: 10px;
`;

export const OptionsContainer = styled.View`
  padding: 20px;
`;

export const OptionsTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;

  color: ${({ theme }) => theme.colors.text};

  padding-left: 20px;
  margin-bottom: 15px;
`;

export const ItemTouchable = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  padding: 5px;
  padding-left: 0;

  margin-bottom: 10px;
`;

export const ItemLabel = styled.Text`
  color: ${({ theme }) => theme.colors.text};

  font-size: 16px;
`;

export const ItemExtra = styled.Text`
  color: ${({ theme }) => theme.colors.grey_80};
  font-size: 12px;
`;
