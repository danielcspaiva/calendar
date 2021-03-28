import React, { useEffect, useState } from "react";
import { Container, AddEventButton, AddIcon } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { setShowCreateEvent } from "../../redux/actions";
import { startOfMonth, startOfWeek, addDays } from "date-fns";
import { ApplicationState } from "../../redux/types";

import Week from "./Week";
import WeekDays from "./WeekDays";
import CreateEvent from "../CreateEvent";
import DayDetails from "../DayDetails";

const Calendar: React.FC = () => {
  const [calendar, setCalendar] = useState([[new Date()]]);
  const { showCreateEvent, showDayDetail } = useSelector(
    (state: ApplicationState) => state
  );

  const dispatch = useDispatch();

  const generateArray = (startDay = new Date()) => {
    const calendarStart = startOfWeek(startOfMonth(startDay));
    let calendarArray = [];
    for (let i = 0; i < 5; i++) {
      calendarArray.push(
        [...Array(7)].map((_, idx) => addDays(calendarStart, idx + i * 7))
      );
    }
    setCalendar(calendarArray);
  };

  useEffect(() => {
    generateArray();
  }, []);

  return (
    <Container>
      <WeekDays weekArray={calendar[0]} />
      {!!calendar &&
        calendar.map((week: Date[], idx: number) => (
          <Week key={idx} weekArray={week} />
        ))}
      <AddEventButton
        onClick={() => dispatch(setShowCreateEvent(!showCreateEvent))}
      >
        <AddIcon />
      </AddEventButton>
      {showCreateEvent && <CreateEvent />}
      {showDayDetail && <DayDetails />}
    </Container>
  );
};

export default Calendar;
