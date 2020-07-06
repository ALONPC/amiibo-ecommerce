import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import axios from "axios";

import { AmiiboCard } from "./AmiiboCard";
import { Backdrop, CircularProgress } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../redux/actions";

export const AmiiboList = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAmiibos();
  }, []);

  const allAmiibos = useSelector(({ amiibo }) => amiibo);
  console.log("AmiiboList -> allAmiibos", allAmiibos);
  const dispatch = useDispatch();

  const getAmiibos = async () => {
    if (allAmiibos.length === 0) {
      console.log("ENTRE");
      const amiibos = await axios
        .get("https://www.amiiboapi.com/api/amiibo")
        .then((res) => {
          setLoading(false);
          return res.data.amiibo;
        });
      const filteredAmiibos = amiibos.slice(0, 100);
      const adjustedAmiibos = adjustAmiibos(filteredAmiibos);
      dispatch(allActions.saveAmiibos(adjustedAmiibos));
    } else {
      setLoading(false);
    }
  };

  const adjustAmiibos = (amiibos) => {
    // sets a random price and the full id for each amiibo
    const possiblePrices = [8990, 9990, 12990, 15990, 19990];
    let randomPrice;
    const adjustedAmiibos = amiibos.map(({ head, tail, ...amiibo }) => {
      randomPrice =
        possiblePrices[Math.floor(Math.random() * possiblePrices.length)];
      return {
        ...amiibo,
        head,
        tail,
        id: `${head}${tail}`,
        price: randomPrice,
      };
    });
    return adjustedAmiibos;
  };

  const useStyles = makeStyles((theme) => ({
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: "#fff",
    },
  }));

  const classes = useStyles();

  return (
    <Container className={classes.cardGrid} maxWidth="lg">
      {loading && (
        <Backdrop className={classes.backdrop} open={true}>
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
      <Grid container spacing={4}>
        {!!allAmiibos.length &&
          allAmiibos.map((amiibo) => (
            <Grid item xs={12} sm={6} md={3}>
              <AmiiboCard key={amiibo.id} amiibo={amiibo}></AmiiboCard>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};
