import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

import { useTheme } from "@material-ui/core/styles";

export const AmiiboCard = ({ amiibo }) => {
  console.log("AmiiboCard -> amiibo", amiibo);
  const { character, image, amiiboSeries, price } = amiibo;
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

  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Typography variant="h4">{character}</Typography>
      </CardContent>
      <img className={classes.cardMedia} src={image} alt={character}></img>
      <CardContent className={classes.cardContent}>
        <Typography variant="subtitle1">{amiiboSeries}</Typography>
        <Typography variant="h4">{`$${price}`}</Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          color="primary"
          size="medium"
          startIcon={<AddShoppingCartIcon />}>
          Agregar al carrito
        </Button>
      </CardActions>
    </Card>
  );
};
