import React from "react";
import { Container, ContentText, Location } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { setshowDayDetail } from "../../../../../redux/actions";
import { EventProps } from "../../../../../types";
import { ApplicationState } from "../../../../../redux/types";

interface Event {
  event: EventProps;
  detail: boolean;
}

const Event: React.FC<Event> = ({ event, detail }: Event) => {
  const { city, color, date, name, time } = event;
  const { showDayDetail } = useSelector((state: ApplicationState) => state);
  const dispatch = useDispatch();
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
      {detail && <Location />}
    </Container>
  );
};

export default Event;
