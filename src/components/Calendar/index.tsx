import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { setEvent, editEvent, deleteEvent } from "../../redux/actions";
import { startOfMonth, startOfWeek, addDays } from "date-fns";

import Week from "./Week";
import WeekDays from "./WeekDays";

const Calendar: React.FC = () => {
  const [calendar, setCalendar] = useState([[new Date()]]);

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
      {!!calendar && calendar.map((week: Date[]) => <Week weekArray={week} />)}
    </Container>
  );
};

export default Calendar;
