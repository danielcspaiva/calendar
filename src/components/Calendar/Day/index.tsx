import React, { useMemo } from "react";

import { Container, DayOfMonth } from "./styles";
import { format } from "date-fns";

interface DayProps {
  day: Date;
}

const Days: React.FC<DayProps> = ({ day }: DayProps) => {
  const currentMonth = useMemo(() => format(new Date(), "M"), []);
  const monthOfDay = format(day, "M");
  const current = currentMonth === monthOfDay;

  const openModal = () => {
    console.log("OPEN MODAL", day);
  };
  return (
    <Container current={current} onClick={() => openModal()}>
      <DayOfMonth current={current}>{format(day, "d")}</DayOfMonth>
    </Container>
  );
};

export default Days;
