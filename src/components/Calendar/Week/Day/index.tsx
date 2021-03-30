import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ApplicationState } from "../../../../types";
import { setshowDayDetail } from "./../../../../redux/actions";
import { EventProps } from "../../../../types";
import { deleteAll } from "../../../../redux/actions";

import { format } from "date-fns";
import Event from "./Event";

import {
  Container,
  DayOfMonth,
  Close,
  DetailHeader,
  DeleteAll,
  EventsContainer,
} from "./styles";
interface DayProps {
  day: Date;
  detail: boolean;
}

const Day: React.FC<DayProps> = ({ day, detail }: DayProps) => {
  const { startDay } = useSelector((state: ApplicationState) => state);
  const currentMonth = format(startDay, "M");
  const monthOfDay = format(day, "M");
  const current = currentMonth === monthOfDay;

  const events = useSelector(
    (state: any) => state.events[format(day, "y-MM-dd")]
  )?.sort((a: EventProps, b: EventProps) => a.time.localeCompare(b.time));

  const { showDayDetail } = useSelector((state: ApplicationState) => state);
  const isToday = format(day, "y-MM-dd") === format(new Date(), "y-MM-dd");
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteAll(events[0].date));
  };

  return (
    <Container
      current={current}
      isToday={isToday}
      onClick={() => !detail && dispatch(setshowDayDetail(!showDayDetail, day))}
      detail={detail}
    >
      <DetailHeader detail={detail}>
        <DayOfMonth current={current} detail={detail}>
          {detail ? format(day, "EEEE, LLLL do") : format(day, "d")}
        </DayOfMonth>
        {detail && (
          <Close onClick={() => dispatch(setshowDayDetail(false, day))} />
        )}
      </DetailHeader>
      <EventsContainer detail={detail}>
        {events &&
          events.map((event: EventProps, idx: number) => (
            <Event key={idx} event={event} detail={detail} />
          ))}
      </EventsContainer>
      {detail && events.length && (
        <DeleteAll onClick={() => handleDelete()}>Delete All</DeleteAll>
      )}
    </Container>
  );
};

export default Day;
