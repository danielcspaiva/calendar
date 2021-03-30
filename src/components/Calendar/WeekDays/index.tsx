import React from "react";
import { WeekContainer, DayOfWeek } from "./styles";
import { format } from "date-fns";
interface WeekProps {
  weekArray: Date[];
}

const WeekDays: React.FC<WeekProps> = ({ weekArray }: WeekProps) => {
  return (
    <WeekContainer>
      {weekArray.map((day, idx) => (
        <DayOfWeek key={idx}>{format(day, "EEEEE")}</DayOfWeek>
      ))}
    </WeekContainer>
  );
};

export default WeekDays;
