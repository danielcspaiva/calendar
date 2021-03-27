import styled from "styled-components";
import Switch from "react-switch";
import { shade } from "polished";
import { BsFillCaretRightFill, BsFillCaretLeftFill } from "react-icons/bs";
import { FiSun, FiMoon } from "react-icons/fi";

export const Container = styled.div`
  height: 7%;
  width: 100vw;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.lightText};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
`;

export const Month = styled.div`
  font-size: 2.5vh;
  font-weight: bold;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  > * {
    margin: 0 2vw;
  }
`;

export const ThemeSwitch = styled(Switch).attrs(({ theme }) => ({
  offColor: shade(0.3, theme.colors.primary),
  onColor: shade(0.3, theme.colors.primary),
}))``;

export const PreviousMonth = styled(BsFillCaretLeftFill).attrs(() => ({
  size: "2vh",
}))`
  color: ${({ theme }) => theme.colors.lightText};
`;

export const NextMonth = styled(BsFillCaretRightFill).attrs(() => ({
  size: "2vh",
}))`
  color: ${({ theme }) => theme.colors.lightText};
`;

export const Moon = styled(FiMoon).attrs(() => ({}))`
  height: 100%;
  width: 100%;
  padding: 20%;
  color: ${({ theme }) => theme.colors.lightText};
`;

export const Sun = styled(FiSun).attrs(() => ({}))`
  height: 100%;
  width: 100%;
  padding: 20%;
  color: ${({ theme }) => theme.colors.lightText};
`;
