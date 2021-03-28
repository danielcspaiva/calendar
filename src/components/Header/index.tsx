import React from "react";
import {
  Container,
  Month,
  ThemeSwitch,
  // PreviousMonth,
  // NextMonth,
  Moon,
  Sun,
} from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../redux/actions";
import { format } from "date-fns";
import { ApplicationState } from "../../redux/types";

const Header: React.FC = () => {
  const theme = useSelector((state: ApplicationState) => state.theme);
  const dispatch = useDispatch();
  return (
    <Container>
      <Month>
        {/* <PreviousMonth /> */}
        {format(new Date(), "MMMM")}
        {/* <NextMonth /> */}
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
