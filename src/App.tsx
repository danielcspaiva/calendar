import React from "react";
import { ThemeProvider } from 'styled-components';
import dark from './styles/themes/dark'
import GlobalStyle from "./styles/global";
import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <div className="App">
        <GlobalStyle />
        <Header />
      </div>
    </ThemeProvider>
  );
};

export default App;
