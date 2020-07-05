import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

export const AppFooter = () => {
  const useStyles = makeStyles((theme) => ({
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(1),
      width: "100%",
      position: "fixed",
      bottom: 0,
    },
  }));

  const classes = useStyles();

  return (
    <footer position="sticky" className={classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        It's a me! Mario!
      </Typography>
      <Typography variant="body2" color="textSecondary" align="center">
        {`Copyright © Amiibo Store ${new Date().getFullYear()}.`}
      </Typography>
    </footer>
  );
};
