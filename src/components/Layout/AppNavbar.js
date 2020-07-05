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
    separator: {
      display: "flex",
      justifyContent: "flex-end",
    },
    toolBar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    logo: {
      display: "flex",
      justifyContent: "space-between",
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
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleCartPopover = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <AppBar position="sticky">
      <Toolbar className={classes.toolBar}>
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
        <div>
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
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}>
            <CartPopoverContent></CartPopoverContent>
          </Popover>
          {/* </NavLink> */}
        </div>
      </Toolbar>
    </AppBar>
  );
};
