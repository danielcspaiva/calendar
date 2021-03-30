import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme, setStartDay } from "../../redux/actions";
import { format } from "date-fns";
import { ApplicationState } from "../../types";

import {
  Container,
  Month,
  ThemeSwitch,
  PreviousMonth,
  NextMonth,
  Moon,
  Sun,
} from "./styles";

const Header: React.FC = () => {
  const { theme, startDay } = useSelector((state: ApplicationState) => state);
  const dispatch = useDispatch();

  const handleStartMonth = (number: number) => {
    const month = startDay.getMonth();
    startDay.setMonth(month + number);
    dispatch(setStartDay(startDay));
  };
  return (
    <Container>
      <Month>
        <PreviousMonth onClick={() => handleStartMonth(-1)} />
        {format(startDay, "MMMM")}
        <NextMonth onClick={() => handleStartMonth(1)} />
      </Month>
      <ThemeSwitch
        onChange={() => dispatch(toggleTheme())}
        checked={theme === "dark"}
        checkedIcon={<Moon />}
        uncheckedIcon={<Sun />}
      />
    </Container>
  );
};

export default Header;
