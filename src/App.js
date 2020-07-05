import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";

import { Store } from "./components/Store";

import { BrowserRouter, Route } from "react-router-dom";
import { Checkout } from "./components/Checkout";

import "./App.css";
import { AppContainer } from "./components/Layout/AppContainer";
import { AppNavbar } from "./components/Layout/AppNavbar";
import { AppFooter } from "./components/Layout/AppFooter";
import { AmiiboDetail } from "./components/AmiiboDetail";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#e60012",
    },
    secondary: {
      main: green[500],
    },
  },
  typography: {
    fontFamily: "Lato",
  },
  navLink: {
    // to avoid the underline becase of the a element
    color: "inherit",
    textDecoration: "inherit",
  },
});

const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <AppNavbar></AppNavbar>
      <AppContainer>
        <Route path="/" exact component={Store}></Route>
        <Route path="/checkout" component={Checkout}></Route>
        <Route path="/amiibo/:id" component={AmiiboDetail}></Route>
      </AppContainer>
      <AppFooter></AppFooter>
    </ThemeProvider>
  </BrowserRouter>
);

export default App;
