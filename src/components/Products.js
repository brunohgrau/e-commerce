import React, { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Rating from "@mui/material/Rating";
import Link from "@mui/material/Link";
import products from "../mocks/products";
import { useGetProductsQuery } from "../slices/apiSlice";

const Products = () => {
  const [value, setValue] = useState(2);
  const { data: products = [] } = useGetProductsQuery();

  return (
    <Container
      fixed
      id="products"
      sx={{
        py: { xs: 16 },
        position: "relative",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "center", sm: "start" },
        }}
      >
        <Typography component="h2" variant="h4" color="text.primary">
          Our Products
        </Typography>
      </Box>
      <Grid container spacing={1}>
        {products.map((product, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            key={product.id}
            sx={{
              display: "flex",
              gap: { xs: 3, sm: 6 },
              alignItems: "center",
              justifyContent: { xs: "center", sm: "start" },
            }}
          >
            <Card sx={{ width: 250, mt: 5 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="../../images/airpods.jpg"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  <Link href="/details" color="text.primary">
                    {product.name}
                  </Link>
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ ml: 2 }}
                  >
                    1 Review
                  </Typography>
                </Box>
                <Typography variant="h4" color="text.secondary" sx={{ mt: 2 }}>
                  $599
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Products;
