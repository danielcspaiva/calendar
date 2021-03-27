import React from "react";
import { ThemeProvider } from "styled-components";
import dark from "./styles/themes/dark";
import light from "./styles/themes/light";
import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import Calendar from "./components/Calendar";
import { useSelector } from "react-redux";

const App: React.FC = () => {
  const { theme } = useSelector((state: any) => state);
  return (
    <ThemeProvider theme={theme === "dark" ? dark : light}>
      <div className="App">
        <GlobalStyle />
        <Header />
        <Calendar />
      </div>
    </ThemeProvider>
  );
};

export default App;
