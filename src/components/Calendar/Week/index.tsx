import React from "react";
import Day from "./Day";

import { WeekContainer } from "./styles";

interface WeekProps {
  weekArray: Date[];
}

const Week: React.FC<WeekProps> = ({ weekArray }: WeekProps) => {
  return (
    <WeekContainer>
      {weekArray && weekArray.map((day, idx) => <Day key={idx} day={day} detail={false}/>)}
    </WeekContainer>
  );
};

export default Week;
