import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { setEvent, editEvent, deleteEvent } from "../../redux/actions";
import { startOfMonth, startOfWeek, addDays } from "date-fns";

import Week from "../Week";

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
      {!!calendar && calendar.map((week: any) => <Week weekArray={week} />)}
    </Container>
  );
};

export default Calendar;
