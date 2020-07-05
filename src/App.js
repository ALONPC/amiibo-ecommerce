import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

import { AppLayout } from "./components/AppLayout";

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
    fontFamily: ["Lato", "sans-serif"].join(","),
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <AppLayout></AppLayout>
  </ThemeProvider>
);

export default App;
