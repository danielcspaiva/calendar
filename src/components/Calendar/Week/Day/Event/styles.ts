import styled from "styled-components";
import { MdLocationOn } from "react-icons/md";

interface ContainerProps {
  color: "cyan" | "salmon" | "pink" | "green" | "yellow";
  detail: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: ${({ theme, color }) => theme.colors[color]};
  color: ${({ theme }) => theme.colors.darkText};
  font-size: ${({ detail }) => (detail ? "1.8vh" : "1.1vh")};
  font-weight: bold;
  width: 100%;
  border-radius: 3px;
  margin-bottom: 3px;
  padding: ${({ detail }) => (detail ? "10px" : "0px")};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContentText = styled.p`
  display: flex;
  align-items: center;
`;

export const Location = styled(MdLocationOn).attrs(({ theme }) => ({
  size: "15px",
}))`
  color: ${({ theme }) => theme.colors.darkText};
`;
