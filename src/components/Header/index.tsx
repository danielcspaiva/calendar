import React from "react";
import { Container } from "./styles";
import Switch from "react-switch";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../../redux/actions";

const Header: React.FC = () => {
  const theme = useSelector((state: any) => state.theme);
  const dispatch = useDispatch();
  return (
    <Container>
      MyCalendar
      <Switch
        onChange={() => dispatch(toggleTheme())}
        checked={theme === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
      />
    </Container>
  );
};

export default Header;
