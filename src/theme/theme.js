import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
        transition: all 0.20s linear;
    }
`;

export const lightTheme = {
  body: "#f1f1f1",
  text: "#121620",
  toggleBorder: "#FFF",
  background: "#363537",
};

export const darkTheme = {
  body: "#121620",
  text: "#f1f1f1",
  toggleBorder: "#6B8096",
  background: "#999",
};
