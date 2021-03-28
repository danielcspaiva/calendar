import React, { useEffect, useState } from "react";
import {
  Container,
  ContentText,
  Location,
  WeatherHeader,
  WeatherContainer,
  Clouds,
  Rain,
  Sunny,
  Snow,
  Storm,
  PartlySunny,
} from "./styles";
import { EventProps } from "../../../../../types";
import axios from "axios";
import differenceInMinutes from "date-fns/differenceInMinutes";

interface Event {
  event: EventProps;
  detail: boolean;
}

interface ForecastProps {
  description: string;
  icon: string;
  id: number;
  main: string;
  temp: number;
}

const Event: React.FC<Event> = ({ event, detail }: Event) => {
  const { city, color, date, name, time } = event;
  const [forecast, setForecast] = useState<ForecastProps | undefined>(
    undefined
  );
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${process.env.REACT_APP_OPENWEATHERAPP}`;

  useEffect(() => {
    getWeatherData();
  }, []);

  const getWeatherData = async () => {
    const { data } = await axios.get(url);
    const dateFromApp = new Date(date + " " + time);
    let foreCast = data.list.filter(
      (elem: any) =>
        differenceInMinutes(dateFromApp, new Date(elem.dt_txt)) > 0 &&
        differenceInMinutes(dateFromApp, new Date(elem.dt_txt)) < 180
    );
    if (foreCast.length) {
      let forecastToSet = {
        ...foreCast[0].weather[0],
        temp: foreCast[0].main.temp,
      };
      setForecast(forecastToSet);
    }
  };

  const renderWeather = () => {
    switch (forecast?.main) {
      case "Clouds":
        return <Clouds />;
      case "Clear":
        return <Sunny />;
      case "Rain":
      case "Drizzle":
        return <Rain />;
      case "Snow":
        return <Snow />;
      default:
        return <PartlySunny />;
    }
  };

  return (
    <Container color={color} detail={detail}>
      <div>
        <ContentText>{time + ": " + name}</ContentText>
        {detail && (
          <ContentText>
            <Location />
            {city}
          </ContentText>
        )}
      </div>
      {detail && forecast ? (
        <WeatherContainer>
          <WeatherHeader>
            <p>{forecast.temp + "°"}</p>
            {renderWeather()}
          </WeatherHeader>
          <p>{forecast.description}</p>
        </WeatherContainer>
      ) : (
        detail && <ContentText>No forecast data</ContentText>
      )}
    </Container>
  );
};

export default Event;
