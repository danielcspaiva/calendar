import React from "react";
import { ThemeProvider } from "styled-components";
import dark from "./styles/themes/dark";
import light from "./styles/themes/light";
import GlobalStyle from "./styles/global";
import { useSelector } from "react-redux";
import Home from "./Home";
import { ApplicationState } from "./redux/types";

const App: React.FC = () => {
  const { theme } = useSelector((state: ApplicationState) => state);
  return (
    <ThemeProvider theme={theme === "dark" ? dark : light}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
};

export default App;
