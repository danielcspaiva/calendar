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
  Clock,
  Title,
  CollapsedContentText,
} from "./styles";
import { EventProps } from "../../../../../types";
import axios from "axios";
import differenceInMinutes from "date-fns/differenceInMinutes";
import { useDispatch, useSelector } from "react-redux";
import {
  setEvent,
  editEvent,
  deleteEvent,
  setShowEditEvent,
} from "../../../../../redux/actions";

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
  const dispatch = useDispatch();

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

  const handleEdit = () => {
    dispatch(setShowEditEvent(true, event));
  };

  const handleDelete = () => {
    dispatch(deleteEvent(event));
  }

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
        </WeatherContainer>
      ) : (
        detail && <ContentText>No forecast data</ContentText>
      )}
      {/* {detail && <p onClick={() => handleEdit()}>edit</p>}
      {detail && <p onClick={() => handleDelete()}>delete</p>} */}
    </Container>
  );
};

export default Event;
