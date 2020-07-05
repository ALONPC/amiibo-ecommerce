import React from "react";
import AppBar from "@material-ui/core/AppBar";
import VideogameAssetIcon from "@material-ui/icons/VideogameAsset";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { IconButton, Badge } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import { AmiiboList } from "./AmiiboList";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  appBarIcon: {
    marginRight: theme.spacing(2),
  },
  appBarName: {
    flexGrow: 1,
  },
}));

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -6,
    top: 4,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
    color: "white",
  },
}))(Badge);

export const AppLayout = () => {
  const classes = useStyles();

  const cart = useSelector(({ cart }) => cart);
  console.log("AppLayout -> cart", cart);

  return (
    <div>
      <CssBaseline />
      <AppBar position="sticky">
        <Toolbar>
          <VideogameAssetIcon
            edge="start"
            className={classes.appBarIcon}
            color="inherit"
            aria-label="menu"
          />
          <Typography
            variant="h4"
            color="inherit"
            noWrap
            className={classes.appBarName}>
            Amiibo Store
          </Typography>

          <IconButton color="inherit">
            <StyledBadge badgeContent={cart.length} color="secondary" showZero>
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <main>
        <AmiiboList></AmiiboList>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          It's a me! Mario!
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          {`Copyright © Amiibo Store ${new Date().getFullYear()}.`}
        </Typography>
      </footer>
    </div>
  );
};
