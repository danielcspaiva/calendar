import styled from "styled-components";
import { VscClose } from "react-icons/vsc";

interface ContainerProps {
  color: "cyan" | "salmon" | "pink" | "green" | "yellow";
}

export const Container = styled.div<ContainerProps>`
  background: ${({ theme, color }) => theme.colors[color]};
  position: absolute;
  height: 500px;
  width: 90%;
  max-width: 500px;
  padding: 20px;
  box-shadow: 0px 0px 25px 5px rgba(0, 0, 0, 0.45);
  border-radius: 20px;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.darkText};
  font-size: 16px;
  font-weight: bold;
`;

export const Close = styled(VscClose).attrs(({ theme }) => ({
  size: "40px",
}))`
  color: ${({ theme }) => theme.colors.darkText};
  position: absolute;
  top: 20x;
  right: 20px;
`;
