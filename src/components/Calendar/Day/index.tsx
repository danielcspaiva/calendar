import React, { useMemo } from "react";
import { useSelector } from "react-redux";

import { Container, DayOfMonth } from "./styles";
import { format } from "date-fns";
import Event from "../Event";
interface DayProps {
  day: Date;
}

const Days: React.FC<DayProps> = ({ day }: DayProps) => {
  const currentMonth = useMemo(() => format(new Date(), "M"), []);
  const monthOfDay = format(day, "M");
  const current = currentMonth === monthOfDay;
  const events = useSelector(
    (state: any) => state.events[format(day, "y-MM-dd")]
  )?.sort((a: any, b: any) => a.time.localeCompare(b.time));

  const isToday = format(day, "y-MM-dd") === format(new Date(), "y-MM-dd");

  return (
    <Container current={current} isToday={isToday}>
      <DayOfMonth current={current}>{format(day, "d")}</DayOfMonth>
      {events &&
        events.map((event: any, idx: number) => (
          <Event key={idx} event={event} />
        ))}
    </Container>
  );
};

export default Days;
