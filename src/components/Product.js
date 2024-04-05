import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import RatingComponent from "./RatingComponent";
import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../slices/apiSlice";
import Loader from "./Loader";
import Message from "./Message";

const Product = () => {
  const { data: products = [], isLoading, error } = useGetProductsQuery();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message />
      ) : (
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
                    image={product.image}
                    title="product image"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      <Link to={`/product/${product.id}`} color="text.primary">
                        {product.name}
                      </Link>
                    </Typography>

                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <RatingComponent value={product.rating} />
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{ ml: 2 }}
                      >
                        {product.numReviews} Review
                      </Typography>
                    </Box>
                    <Typography
                      variant="h4"
                      color="text.secondary"
                      sx={{ mt: 2 }}
                    >
                      ${product.price}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      )}
    </>
  );
};

export default Product;
