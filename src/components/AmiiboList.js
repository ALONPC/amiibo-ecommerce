import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import axios from "axios";

import { AmiiboCard } from "./AmiiboCard";

export const AmiiboList = () => {
  const [amiibos, setAmiibos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAmiibos();
  }, []);

  const getAmiibos = async () => {
    const amiibos = await axios
      .get("https://www.amiiboapi.com/api/amiibo")
      .then((res) => {
        setLoading(false);
        return res.data.amiibo;
      });
    const filteredAmiibos = amiibos.slice(0, 100);
    injectPrices(filteredAmiibos);
  };

  const injectPrices = (amiibos) => {
    const possiblePrices = [8990, 9990, 12990, 15990, 19990];
    let randomPrice;
    const amiibosWithPrices = amiibos.map((amiibo) => {
      randomPrice =
        possiblePrices[Math.floor(Math.random() * possiblePrices.length)];
      return {
        ...amiibo,
        price: randomPrice,
      };
    });
    setAmiibos(amiibosWithPrices);
  };

  const useStyles = makeStyles((theme) => ({
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
  }));

  const classes = useStyles();

  return (
    <Container className={classes.cardGrid} maxWidth="lg">
      {loading && <h1>Loading...</h1>}
      <Grid container spacing={4}>
        {amiibos.map((amiibo) => (
          <Grid item xs={12} sm={6} md={3}>
            <AmiiboCard amiibo={amiibo}></AmiiboCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
