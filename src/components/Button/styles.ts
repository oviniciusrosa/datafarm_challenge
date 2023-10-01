import styled from "styled-components/native";

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 48px;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.primary_500};
  border-radius: 8px;
`;

export const Label = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
`;

export const OutlineButton = styled(Button)`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.grey_60};

  padding: 5px;
`;

export const OutlineLabel = styled(Label)`
  color: ${({ theme }) => theme.colors.grey_60};
`;
