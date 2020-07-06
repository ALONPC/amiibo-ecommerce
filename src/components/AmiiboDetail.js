import React from "react";
import { useParams } from "react-router-dom";
import { AmiiboCard } from "./AmiiboCard";
import { useSelector } from "react-redux";

export const AmiiboDetail = () => {
  const { id } = useParams();
  const allAmiibos = useSelector(({ amiibo }) => amiibo);
  const amiiboToDisplay = allAmiibos.filter((amiibo) => id === amiibo.id)[0];

  // nice to know: redux state is lost in every refresh so if this page happens to be refreshed, it will crash (only this one)

  return <AmiiboCard amiibo={amiiboToDisplay}></AmiiboCard>;
};
