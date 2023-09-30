import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;

  gap: 10px;
`;

export const ContentWrapper = styled.View`
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.secondary_300};

  height: 45px;
  padding-horizontal: 15px;

  justify-content: center;
`;

export const Content = styled.Text`
  color: ${({ theme }) => theme.colors.white};
`;

export const ActionButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  height: 45px;
  width: 35px;

  align-items: center;
  justify-content: center;
`;
