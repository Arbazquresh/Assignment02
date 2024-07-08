import React from "react";
import {Grid,Button, Card, CardContent} from "@mui/material"
import { Link } from "react-router-dom";


export const Navbar=()=>{
    return(
     <Grid container spacing={2}>
     <Grid sx={{marginBottom:5}} item xs={4}>
     <Card>
     <CardContent>
  <Link to="product" >
   <Button variant="contained" fullWidth >Product</Button>
  </Link>
  </CardContent>
  </Card>
     </Grid>

     <Grid item xs={4}>
     <Card>
     <CardContent>
    
     <Link to="userbob">
     <Button variant="contained" fullWidth>User</Button>
     </Link>
     </CardContent>
     </Card>
     </Grid>
     
     </Grid>
    )
}