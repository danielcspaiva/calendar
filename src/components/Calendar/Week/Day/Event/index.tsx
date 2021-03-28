import React from "react";
import { Container } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { setShowEventDetail } from "../../../../../redux/actions";
import { EventProps } from "../../../../../types";
import { ApplicationState } from "../../../../../redux/types";

interface Event {
  event: EventProps;
}

const Event: React.FC<Event> = ({ event }) => {
  const { city, color, date, name, time } = event;
  const { showEventDetail } = useSelector((state: ApplicationState) => state);
  const dispatch = useDispatch();
  return (
    <Container
      onClick={() => dispatch(setShowEventDetail(!showEventDetail, event))}
      color={color}
    >
      {time + ": " + name}
    </Container>
  );
};

export default Event;
