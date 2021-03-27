import React from "react";
import { ThemeProvider } from "styled-components";
import dark from "./styles/themes/dark";
import light from "./styles/themes/light";
import GlobalStyle from "./styles/global";
import { useSelector } from "react-redux";
import Home from "./Home";

const App: React.FC = () => {
  const { theme } = useSelector((state: any) => state);
  return (
    <ThemeProvider theme={theme === "dark" ? dark : light}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
};

export default App;
