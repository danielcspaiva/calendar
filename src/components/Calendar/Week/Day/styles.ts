import styled from "styled-components";
import { shade, lighten } from "polished";
import { VscClose } from "react-icons/vsc";

interface ContainerProps {
  current: boolean;
  isToday: boolean;
  detail: boolean;
}
interface DayOfMonthProps {
  current: boolean;
  detail: boolean;
}

interface DetailHeaderProps {
  detail: boolean;
}

export const Container = styled.div<ContainerProps>`
  height: 100%;
  width: 100%;
  align-items: stretch;
  padding: ${({ detail }) => (detail ? 20 : 1)}px;
  margin: ${({ detail }) => (detail ? 0 : 0.5)}%;
  background: ${({ theme, current, isToday }) =>
    isToday
      ? theme.colors.accent
      : theme.title === "light"
      ? current
        ? shade(0.03, theme.colors.background)
        : shade(0.15, theme.colors.background)
      : current
      ? lighten(0.03, theme.colors.background)
      : shade(0.6, theme.colors.background)};
  border-radius: 5px;
  overflow: scroll;

  &:hover {
    background: ${({ theme, isToday, detail }) =>
      !detail
        ? isToday
          ? lighten(0.1, theme.colors.accent)
          : theme.title === "light"
          ? shade(0.1, theme.colors.background)
          : lighten(0.1, theme.colors.background)
        : null};
  }
`;

export const DayOfMonth = styled.p<DayOfMonthProps>`
  font-size: ${({ detail }) => (detail ? 24 : 14)}px;
  font-weight: bold;
  margin: ${({ detail }) => (detail ? 0 : 2)}px;
  color: ${({ theme, current }) =>
    theme.title === "light"
      ? current
        ? theme.colors.primaryText
        : theme.colors.secondaryText
      : theme.colors.lightText};
`;

export const Close = styled(VscClose).attrs(({ theme }) => ({
  size: "40px",
}))`
  color: ${({ theme }) => theme.colors.primaryText};
`;

export const DetailHeader = styled.div<DetailHeaderProps>`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ detail }) => (detail ? 20 : 0)}px;
`;
