import styled from "styled-components";
import { shade } from "polished";

interface ContainerProps {
  current: boolean;
}
interface DayOfMonthProps {
  current: boolean;
}

export const Container = styled.div<ContainerProps>`
  height: 100%;
  width: 100%;
  align-items: stretch;
  padding: 1%;
  margin: 1%;
  background: ${({ theme, current }) =>
    current ? theme.colors.background : shade(0.3, theme.colors.primary)};
  border-radius: 10px;
  border: 2px solid
    ${({ theme, current }) =>
      current ? shade(0.2, theme.colors.background) : shade(0.3, theme.colors.primary)};
  &:hover {
    background: ${({ theme, current }) =>
    current ? shade(0.2, theme.colors.background) : shade(0.3, theme.colors.primary)};
`;

export const DayOfMonth = styled.text<DayOfMonthProps>`
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme, current }) =>
    current ? theme.colors.primatyText : theme.colors.secondaryText};
`;
