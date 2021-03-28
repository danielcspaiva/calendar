import styled from "styled-components";

interface ContainerProps {
  color: "cyan" | "salmon" | "pink" | "green" | "yellow";
}

export const Container = styled.div<ContainerProps>`
  background: ${({ theme, color }) => theme.colors[color]};
  color: ${({ theme }) => theme.colors.darkText};
  font-size: 1.1vh;
  font-weight: bold;
  width: 100%;
  border-radius: 3px;
  margin-bottom: 3px;
  overflow: scroll;
`;
