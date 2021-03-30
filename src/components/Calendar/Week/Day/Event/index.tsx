import React, { useEffect, useState, useCallback } from "react";
import { EventProps } from "../../../../../types";
import axios from "axios";
import differenceInMinutes from "date-fns/differenceInMinutes";
import { useDispatch } from "react-redux";
import { deleteEvent, setShowEditEvent } from "../../../../../redux/actions";

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
  PartlySunny,
  Clock,
  Title,
  CollapsedContentText,
  Delete,
  Edit,
  OptionsContainer,
} from "./styles";

interface IEvent {
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

const Event: React.FC<IEvent> = ({ event, detail }: IEvent) => {
  const { city, color, date, name, time } = event;
  const dispatch = useDispatch();

  const [forecast, setForecast] = useState<ForecastProps | undefined>(
    undefined
  );

  const getWeatherData = useCallback(async () => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${process.env.REACT_APP_OPENWEATHERAPP}`;
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
  }, [city, date, time]);

  useEffect(() => {
    if (detail) {
      getWeatherData();
    }
  }, [getWeatherData, detail]);

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

  const handleEdit = () => {
    dispatch(setShowEditEvent(true, event));
  };

  const handleDelete = () => {
    dispatch(deleteEvent(event));
  };

  return (
    <Container color={color} detail={detail}>
      {detail ? (
        <div>
          <Title>{name}</Title>
          <ContentText>
            <Location />
            {city}
          </ContentText>
          <ContentText>
            <Clock />
            {time}
          </ContentText>
        </div>
      ) : (
        <CollapsedContentText>{name}</CollapsedContentText>
      )}
      {detail && forecast ? (
        <WeatherContainer>
          <WeatherHeader>
            <p>{forecast.temp + "°"}</p>
            {renderWeather()}
          </WeatherHeader>
          <p>{forecast.description}</p>
          <OptionsContainer>
            <Edit onClick={() => handleEdit()}>edit</Edit>
            <Delete onClick={() => handleDelete()}>delete</Delete>
          </OptionsContainer>
        </WeatherContainer>
      ) : (
        detail && (
          <WeatherContainer>
            <ContentText>No forecast data</ContentText>
            <OptionsContainer>
              <Edit onClick={() => handleEdit()}>edit</Edit>
              <Delete onClick={() => handleDelete()}>delete</Delete>
            </OptionsContainer>
          </WeatherContainer>
        )
      )}
    </Container>
  );
};

export default Event;
