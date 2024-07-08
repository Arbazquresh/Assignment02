import React from "react";
import { Card, CardContent, Grid } from "@mui/material";

export const UserItem = ({ item }) => {
  return (
    <Grid sx={{ bgcolor: "orange", height: 370 }} item xs={4}>
      <Card>
        <CardContent>
          <img className="image" src={item.avatar} alt="" />
          <h2>{item.name}</h2>
          <p>{item.role}</p>
          <p>{item.email}</p>
          <p>{item.password}</p>
        </CardContent>
      </Card>
    </Grid>
  );
};
