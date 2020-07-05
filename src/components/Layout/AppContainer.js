import React from "react";
import { CssBaseline } from "@material-ui/core";

export const AppContainer = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <main>{children}</main>
    </>
  );
};
