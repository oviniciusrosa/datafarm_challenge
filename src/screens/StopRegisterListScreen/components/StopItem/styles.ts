import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const HeadingContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const FarmName = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.black};
`;

export const ReasonText = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.grey_60};
`;

export const CreatedAt = styled.Text`
  font-size: 10px;
  color: ${({ theme }) => theme.colors.grey_60};
`;
