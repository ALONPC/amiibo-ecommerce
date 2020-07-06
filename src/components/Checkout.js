import React, { useState, useEffect } from "react";
import {
  makeStyles,
  Container,
  Divider,
  Typography,
  ListItemText,
  ListItemAvatar,
  Avatar,
  ListItem,
  Button,
  Snackbar,
} from "@material-ui/core";
import PaymentIcon from "@material-ui/icons/Payment";
import MuiAlert from "@material-ui/lab/Alert";

import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  grid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  payout: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
  },
  payButton: {
    color: "white",
    fontSize: "24px",
  },
  total: {
    fontWeight: 700,
  },
}));

const Alert = (props) => <MuiAlert elevation={6} variant="filled" {...props} />;

export const Checkout = () => {
  const classes = useStyles();
  const cart = useSelector(({ cart }) => cart);
  const history = useHistory();

  useEffect(() => {
    if (cart.length === 0) {
      history.push("/");
    }
  });

  const total = cart.reduce((acc, curr) => {
    return acc + curr.price;
  }, 0);

  const [open, setOpen] = useState(false);

  const handlePayment = () => {
    setOpen(true);
  };

  return (
    <Container className={classes.grid} maxWidth="lg">
      <h1>Checkout</h1>
      {cart.map((item) => {
        const { character, price, image, amiiboSeries } = item;
        return (
          <>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt={character} src={image} />
              </ListItemAvatar>
              <ListItemText
                primary={`${character} - ${amiiboSeries}`}
                secondary={
                  <>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}>
                      <Typography
                        component="span"
                        variant="h6"
                        className={classes.inline}
                        color="textPrimary">
                        {`$${price}`}
                      </Typography>
                    </div>
                  </>
                }
              />
            </ListItem>
          </>
        );
      })}
      <Divider variant="fullWidth" />
      <br></br>
      <div className={classes.payout}>
        <Typography
          component="span"
          variant="h5"
          className={classes.total}
          color="textPrimary">
          {`TOTAL: $${total}`}
        </Typography>
        <Button
          className={classes.payButton}
          size="large"
          variant="contained"
          color="secondary"
          onClick={handlePayment}
          startIcon={<PaymentIcon />}>
          Pagar
        </Button>
      </div>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={open}
        autoHideDuration={4000}>
        <Alert severity="success">
          <Typography variant="h5">Felicidades! Fin de la demo.</Typography>
        </Alert>
      </Snackbar>
    </Container>
  );
};
