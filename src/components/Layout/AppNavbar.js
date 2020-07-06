import React, { useState } from "react";
import {
  Toolbar,
  Typography,
  Tooltip,
  IconButton,
  withStyles,
  Badge,
  makeStyles,
  AppBar,
  Popover,
  useTheme,
  Grid,
} from "@material-ui/core";
import VideogameAssetIcon from "@material-ui/icons/VideogameAsset";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { CartPopoverContent } from "../CartPopoverContent";

export const AppNavbar = () => {
  const useStyles = makeStyles((theme) => ({
    appBarIcon: {
      marginRight: theme.spacing(2),
    },

    logo: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
    },
    cartButton: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
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

  const cart = useSelector(({ cart }) => cart);
  console.log("AppNavbar -> cart", cart);

  const classes = useStyles();

  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const handleCartPopover = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = (element) => {
    setAnchorEl(element);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <AppBar position="sticky">
      <Toolbar className={classes.toolBar}>
        <Grid container>
          <Grid item xs={6}>
            <div className={classes.logo}>
              <VideogameAssetIcon
                edge="start"
                className={classes.appBarIcon}
                color="inherit"
                aria-label="menu"
              />
              <NavLink to="/" style={theme.navLink}>
                <Typography
                  variant="h4"
                  color="inherit"
                  noWrap
                  className={classes.appBarName}>
                  Amiibo Store
                </Typography>
              </NavLink>
            </div>
          </Grid>

          <Grid item xs={5}>
            <div className={classes.cartButton}>
              {/* <NavLink
            to="/checkout"
            style={{ color: "inherit", textDecoration: "inherit" }}> */}
              <Tooltip title="Ir al carrito">
                <IconButton color="inherit" onClick={handleCartPopover}>
                  <StyledBadge
                    badgeContent={cart.length}
                    color="secondary"
                    showZero>
                    <ShoppingCartIcon />
                  </StyledBadge>
                </IconButton>
              </Tooltip>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={() => handleClose(null)}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}>
                <CartPopoverContent
                  handleClose={handleClose}></CartPopoverContent>
              </Popover>
              {/* </NavLink> */}
            </div>
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
