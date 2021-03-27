import styled from "styled-components";
import { shade, lighten } from "polished";

interface ContainerProps {
  current: boolean;
}
interface DayOfMonthProps {
  current: boolean;
}

export const Container = styled.div<ContainerProps>`
  height: 100%;
  width: 100vw;
  align-items: stretch;
  padding: 1%;
  margin: 0.5%;
  background: ${({ theme, current }) =>
    theme.title === "light"
      ? current
        ? shade(0.03, theme.colors.background)
        : shade(0.15, theme.colors.background)
      : current
      ? lighten(0.03, theme.colors.background)
      : shade(0.6, theme.colors.background)};
  border-radius: 5px;
  
  &:hover {
    background: ${({ theme, current }) =>
      current
        ? shade(0.2, theme.colors.background)
        : shade(0.3, theme.colors.primary)};
`;

export const DayOfMonth = styled.text<DayOfMonthProps>`
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme, current }) =>
    theme.title === "light"
      ? current
        ? theme.colors.primatyText
        : theme.colors.secondaryText
      : theme.colors.lightText};
`;
