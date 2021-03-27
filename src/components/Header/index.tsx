import React, { useContext } from "react";
import { Container, Month } from "./styles";
import Switch from "react-switch";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../../redux/actions";
import { format } from "date-fns";
import { ThemeContext } from "styled-components";
import { shade } from "polished";

const Header: React.FC = () => {
  const theme = useContext(ThemeContext);
  const dispatch = useDispatch();
  return (
    <Container>
      <Month>{format(new Date(), "MMMM")}</Month>
      <Switch
        onChange={() => dispatch(toggleTheme())}
        checked={theme.title === "dark"}
        checkedIcon={false}
        uncheckedIcon={false}
        offColor={shade(0.1, theme.colors.primary)}
        onColor={shade(0.1, theme.colors.primary)}
      />
    </Container>
  );
};

export default Header;
