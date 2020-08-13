import { createGlobalStyle } from "styled-components";
import { primaryFont } from "./typography";
import { normalize } from "polished";

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.textColor};
    background-color: ${({ theme }) => theme.bodyColor};
    font-family: ${({ theme }) => theme.primaryFont};
  }

  main {
    width: 90%;
    margin: 0 auto;
  }
`;
