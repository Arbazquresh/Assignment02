import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, TextField } from "@mui/material";
import { UserItem } from "./UseItem";

export const UserList = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const result = await axios.get("https://api.escuelajs.co/api/v1/users");
    setData(result.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Grid container spacing={2}>
      <TextField variant="outlined" fullWidth />
      {data.slice(0, 3).map((item) => (
        <UserItem item={item} />
      ))}
    </Grid>
  );
};
