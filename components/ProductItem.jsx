import React from "react";
import { Grid, Card, CardContent } from "@mui/material";

export const ProductItem = ({ item }) => {
  return (
    <Grid item xs={3}>
      <Card sx={{ bgcolor: "coral" }}>
        <CardContent>
          <h1>{item.id}</h1>
          <img src={item.image} alt="" />
          <p>{item.title}</p>
          <h3>{item.category}</h3>
        </CardContent>
      </Card>
    </Grid>
  );
};
