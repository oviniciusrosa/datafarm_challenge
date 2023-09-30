import styled from "styled-components/native";

export const Container = styled.View`
  margin-vertical: 20px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 5px;

  margin-bottom: 10px;
`;

export const Label = styled.Text`
  font-size: 14px;
`;

export const TextArea = styled.TextInput`
  border: 1px solid ${({ theme }) => theme.colors.grey_40};
  border-radius: 5px;
  padding: 10px;

  text-align-vertical: top;
`;
