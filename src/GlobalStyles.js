import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Roboto', sans-serif;
    }
`;

export const theme = {
  color: {
    main: "#158479",
    light: "#e9fcfa",
    dark: "#0e5850",
    contrast: "#ffcc33",
  },
};
