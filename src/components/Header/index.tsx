import React, { useContext } from "react";
import { Container } from "./styles";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";

const Header: React.FC = () => {
  const { colors } = useContext(ThemeContext);
  return (
    <Container>
      Hello World
      <Switch
        onChange={() => {}}
        checked={true}
        checkedIcon={false}
        uncheckedIcon={false}
      />
    </Container>
  );
};

export default Header;
