import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    font-size: 14px;
    color: ${({ theme }) => theme.colors.lightText};
    font-family: 'Open Sans', sans-serif;
    min-height: 100vh;
    min-height: -webkit-fill-available;
  }

  html {
    height: -webkit-fill-available;
  }
`;
