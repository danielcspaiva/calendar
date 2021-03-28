import React from "react";
import { Container, Text, Close } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { ApplicationState } from "../../redux/types";
import { setShowEventDetail } from "../../redux/actions";

const EventDetails: React.FC = () => {
  const { eventInDetail } = useSelector((state: ApplicationState) => state);
  const { city, color, date, name, time } = eventInDetail;
  const dispatch = useDispatch();

  return (
    <Container color={color}>
      <Close
        onClick={() => dispatch(setShowEventDetail(false, eventInDetail))}
      />
      <Text>{name}</Text>
      <Text>{city}</Text>
      <Text>{color}</Text>
      <Text>{date}</Text>
      <Text>{time}</Text>
      <Text>Weather forecast......</Text>
    </Container>
  );
};

export default EventDetails;
