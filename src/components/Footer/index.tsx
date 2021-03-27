import React, { useContext } from "react";
import { Container, FooterText } from "./styles";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import { ThemeContext } from "styled-components";

const Footer: React.FC = () => {
  const theme = useContext(ThemeContext);
  return (
    <Container>
      <FooterText>Developed by Daniel Paiva</FooterText>
      <a
        href="https://github.com/danielcspaiva"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiGithub size={20} color={theme.colors.defaultText} />
      </a>
      {"  "}
      <a
        href="https://www.linkedin.com/in/danielcspaiva/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiLinkedin size={20} color={theme.colors.defaultText} />
      </a>
    </Container>
  );
};

export default Footer;
