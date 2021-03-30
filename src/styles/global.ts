import { createGlobalStyle } from "styled-components";
import { shade } from "polished";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    ::-webkit-scrollbar {
      background-color: transparent !important;
      width: 10px !important;
    }
  
    ::-webkit-scrollbar-track {
      background-color: transparent !important;
    }
  
    ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => shade(0.3, theme.colors.background)} !important;
      border-radius: 16px !important;
      width: 5px;
      border: 4px solid transparent !important;
    }
  
    ::-webkit-scrollbar-button {
      display: none !important;
    }
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    font-size: 14px;
    color: ${({ theme }) => theme.colors.lightText};
    font-family: "Open Sans", sans-serif;
    min-height: 100%;
    height: -webkit-fill-available;
  }

  html {
    min-height: 100%;
    height: -webkit-fill-available;
  }
`;
