import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

import { useTheme } from "@material-ui/core/styles";
import { Snackbar, IconButton } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import CloseIcon from "@material-ui/icons/Close";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../redux/actions";
import { NavLink } from "react-router-dom";

export const AmiiboCard = ({ amiibo }) => {
  const { id, character, image, amiiboSeries, price, type } = amiibo;

  const theme = useTheme();

  const Alert = (props) => (
    <MuiAlert elevation={6} variant="filled" {...props} />
  );

  const useStyles = makeStyles((theme) => ({
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: 18,
    },
    cardContent: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    },
    cardMedia: {
      maxWidth: "100%",
      height: 140,
    },
  }));

  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const cart = useSelector(({ cart }) => cart);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    setOpen(true);
    dispatch(allActions.addAmiiboToCart(amiibo));
  };

  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Typography variant="h4">{character}</Typography>
      </CardContent>
      <NavLink to={`/amiibo/${id}`} style={theme.navLink}>
        <img className={classes.cardMedia} src={image} alt={character}></img>
      </NavLink>
      <CardContent className={classes.cardContent}>
        <Typography variant="subtitle1">{`${amiiboSeries} - ${type}`}</Typography>
        <Typography variant="h4">{`$${price}`}</Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={handleAddToCart}
          variant="contained"
          color="primary"
          size="medium"
          startIcon={<AddShoppingCartIcon />}>
          Agregar al carrito
        </Button>
        <Snackbar
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          open={open}
          autoHideDuration={1000}
          onClose={handleClose}
          action={
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          }>
          <Alert onClose={handleClose} severity="success">
            "Producto agregado!"
          </Alert>
        </Snackbar>
      </CardActions>
    </Card>
  );
};
