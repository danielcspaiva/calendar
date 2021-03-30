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

interface EventsContainerProps {
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
  border-radius: ${({ detail }) => (detail ? 15 : 5)}px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: ${({ detail }) => (detail ? null : "pointer")};

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

export const EventsContainer = styled.div<EventsContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  overflow-y: scroll;
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
  size: "35px",
}))`
  color: ${({ theme }) => theme.colors.primaryText};
  cursor: pointer;
`;

export const DetailHeader = styled.div<DetailHeaderProps>`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ detail }) => (detail ? 20 : 0)}px;
`;

export const DeleteAll = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  height: 40px;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.darkText};
  background: ${({ theme }) => theme.colors.red};
  cursor: pointer;
  margin-top: 15px;

  &:hover {
    background: ${({ theme }) => shade(0.1, theme.colors.red)};
  }
`;
