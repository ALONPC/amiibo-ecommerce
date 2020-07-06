import React from "react";
import { useParams } from "react-router-dom";
import { AmiiboCard } from "./AmiiboCard";
import { useSelector } from "react-redux";
import { Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  grid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

export const AmiiboDetail = () => {
  const { id } = useParams();
  const allAmiibos = useSelector(({ amiibo }) => amiibo);
  const amiiboToDisplay = allAmiibos.filter((amiibo) => id === amiibo.id)[0];
  const classes = useStyles();

  // nice to know: redux state is lost in every refresh so if this page happens to be refreshed, it will crash (only this one)

  return (
    <Container className={classes.grid} maxWidth="md">
      <AmiiboCard amiibo={amiiboToDisplay}></AmiiboCard>
    </Container>
  );
};
