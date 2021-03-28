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

import { FiClock } from "react-icons/fi";

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

export const CollapsedContentText = styled.p`
  display: flex;
  align-items: center;
  padding: 2px;
`;

export const WeatherHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  > p {
    font-size: 1.7vh;
    margin-right: 2px;
  }
  width: 100%;
`;

export const WeatherContainer = styled.div`
  font-size: 1.5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  > p {
    font-size: 1.5vh;
  }
`;

export const Location = styled(MdLocationOn)`
  color: ${({ theme }) => theme.colors.darkText};
  margin-right: 5px;
  height: 1.5vh;
  width: 1.5vh;
`;

export const Clouds = styled(TiWeatherCloudy)`
  color: ${({ theme }) => theme.colors.darkText};
  height: 2.5vh;
  width: 2.5vh;
`;

export const Rain = styled(TiWeatherDownpour)`
  color: ${({ theme }) => theme.colors.darkText};
  height: 2.5vh;
  width: 2.5vh;
`;

export const Sunny = styled(TiWeatherSunny)`
  color: ${({ theme }) => theme.colors.darkText};
  height: 2.5vh;
  width: 2.5vh;
`;

export const Snow = styled(TiWeatherSnow)`
  color: ${({ theme }) => theme.colors.darkText};
  height: 2.5vh;
  width: 2.5vh;
`;

export const Storm = styled(TiWeatherStormy)`
  color: ${({ theme }) => theme.colors.darkText};
  height: 2.5vh;
  width: 2.5vh;
`;

export const PartlySunny = styled(TiWeatherPartlySunny)`
  color: ${({ theme }) => theme.colors.darkText};
  height: 2.5vh;
  width: 2.5vh;
`;

export const Clock = styled(FiClock)`
  color: ${({ theme }) => theme.colors.darkText};
  margin-right: 5px;
  height: 1.5vh;
  width: 1.5vh;
`;

export const Title = styled.p`
  font-size: 2vh;
`;
