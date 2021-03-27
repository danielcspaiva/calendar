import React from "react";
import Day from "../Day";

import { WeekContainer } from "./styles";

interface WeekProps {
  weekArray: Date[];
}

const Week: React.FC<WeekProps> = ({ weekArray }: WeekProps) => {
  return (
    <WeekContainer>
      {weekArray && weekArray.map((day) => <Day day={day} />)}
    </WeekContainer>
  );
};

export default Week;
