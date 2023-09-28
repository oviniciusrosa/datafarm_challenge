import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.grey_40};

  border-radius: 8px;
  padding-horizontal: 10px;
`;

export const Input = styled.TextInput`
  padding: 0;

  height: 35px;
  flex: 1;
`;
