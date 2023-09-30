import { View, ViewProps } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View``;

export const Label = styled.Text`
  color: ${({ theme }) => theme.colors.primary_500};
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 12px;
`;

export const ListContainer = styled.View`
  border: 1px solid ${({ theme }) => theme.colors.grey_40};
  border-radius: 5px;

  gap: 5px;
  padding: 10px;
`;

export const ReasonItem = styled(({ $isSelected, ...rest }) => (
  <View {...rest} />
))<{
  $isSelected: boolean;
}>`
  flex-direction: row;
  align-items: center;
  gap: 15px;

  padding: 5px;
  border-radius: 8px;
  background-color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.colors.primary_50 : "transparent"};
`;

export const ReasonTitle = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
`;
