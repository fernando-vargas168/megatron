import React, { useState, useEffect } from "react";
import Head from "./Head/index.jsx";
import Menu from "./Menu.jsx";
import { createGlobalStyle } from "styled-components";
import { Container } from "@material-ui/core";
import { Fonts } from "../styles/vars";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
const GlobalStyle = createGlobalStyle`
*{
  font-family: ${Fonts.font1};
  font-weight: 800
}
body {
  margin: 0 !important;
  overflow-x: hidden;
}
a{
  color: initial;
  text-decoration:none;
}
`;
const Montserrat = {
  fontFamily: "Montserrat",
  fontWeight: 800
};
const theme = createMuiTheme({
  root: {
    padding: "0"
  },
  typography: {
    fontFamily: [
      "Montserrat Tech Mono",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(",")
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [Montserrat]
      }
    }
  }
});
const Layout = ({ children, location }) => {
  return (
    <>
      <Head />
      <ThemeProvider theme={theme}>
        <Menu location={location.pathname} />
        <div className="Page">{children}</div>
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
};

export default Layout;
