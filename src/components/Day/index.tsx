import React, { useMemo } from "react";

import { Container, DayOfMonth } from "./styles";
import { format } from "date-fns";

interface DayProps {
  day: Date;
}

const Days: React.FC<DayProps> = ({ day }: DayProps) => {
  const currentMonth = useMemo(() => format(new Date(), "M"), []);
  const monthOfDay = format(day, "M");
  return (
    <Container current={currentMonth === monthOfDay}>
      <DayOfMonth>{format(day, "d")}</DayOfMonth>
    </Container>
  );
};

export default Days;
