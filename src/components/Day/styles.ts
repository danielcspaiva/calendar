import styled from "styled-components";

interface ContainerProps {
  current: boolean;
}

export const Container = styled.div<ContainerProps>`
  height: 100%;
  width: 100%;
  align-items: stretch;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  padding: 10px;
  background: ${({ theme, current }) =>
    current ? theme.colors.background : theme.colors.primary};
`;

export const DayOfMonth = styled.text`
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;
