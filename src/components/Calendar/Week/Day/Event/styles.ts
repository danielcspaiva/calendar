import styled from "styled-components";
import { MdLocationOn } from "react-icons/md";
import {
  TiWeatherCloudy,
  TiWeatherDownpour,
  TiWeatherSunny,
  TiWeatherSnow,
  TiWeatherStormy,
  TiWeatherPartlySunny,
} from "react-icons/ti";

interface ContainerProps {
  color: "cyan" | "salmon" | "pink" | "green" | "yellow";
  detail: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: ${({ theme, color }) => theme.colors[color]};
  color: ${({ theme }) => theme.colors.darkText};
  font-size: ${({ detail }) => (detail ? "1.7vh" : "1.1vh")};
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

export const WeatherHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  > p {
    font-size: 14px;
    margin-right: 2px;
  }
  width: 100%;
`;

export const WeatherContainer = styled.div`
  font-size: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  > p {
    font-size: 12px;
  }
`;

export const Clouds = styled(TiWeatherCloudy).attrs(({ theme }) => ({
  size: "15px",
}))`
  color: ${({ theme }) => theme.colors.darkText};
`;

export const Rain = styled(TiWeatherDownpour).attrs(({ theme }) => ({
  size: "15px",
}))`
  color: ${({ theme }) => theme.colors.darkText};
`;

export const Sunny = styled(TiWeatherSunny).attrs(({ theme }) => ({
  size: "15px",
}))`
  color: ${({ theme }) => theme.colors.darkText};
`;

export const Snow = styled(TiWeatherSnow).attrs(({ theme }) => ({
  size: "15px",
}))`
  color: ${({ theme }) => theme.colors.darkText};
`;

export const Storm = styled(TiWeatherStormy).attrs(({ theme }) => ({
  size: "15px",
}))`
  color: ${({ theme }) => theme.colors.darkText};
`;

export const PartlySunny = styled(TiWeatherPartlySunny).attrs(({ theme }) => ({
  size: "15px",
}))`
  color: ${({ theme }) => theme.colors.darkText};
`;
