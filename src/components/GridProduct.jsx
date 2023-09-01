import React from "react";
import Grid from "@mui/material/Grid";
import products from "../assets/fake-data";
import CardProducts from "./CardProducts";


const GridProduct = () => {

  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {products.map((producto, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
      
            <CardProducts producto={producto} />

          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default GridProduct;
