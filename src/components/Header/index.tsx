import React from "react";
import { Container, Month } from "./styles";
import Switch from "react-switch";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../../redux/actions";
import { format } from "date-fns";

const Header: React.FC = () => {
  const theme = useSelector((state: any) => state.theme);
  const dispatch = useDispatch();
  return (
    <Container>
      <Month>{format(new Date(), "MMMM")}</Month>
      <Switch
        onChange={() => dispatch(toggleTheme())}
        checked={theme === "dark"}
        checkedIcon={false}
        uncheckedIcon={false}
      />
    </Container>
  );
};

export default Header;
