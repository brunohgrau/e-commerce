import React from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import Divider from "@mui/material/Divider";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import TextField from "@mui/material/TextField";
import { useGetProductQuery } from "../slices/apiSlice";
import RatingComponent from "../components/RatingComponent";
import { Link, useParams } from "react-router-dom";

const style = {
  p: 0,
  width: "100%",
  maxWidth: 360,
  borderRadius: 2,
  border: "1px solid",
  borderColor: "divider",
  backgroundColor: "background.paper",
};

const ProductScreen = () => {
  const { id: productId } = useParams();
  const {
    data: product,
    isFetching,
    isSuccess,
  } = useGetProductQuery(productId);

  let content;
  if (isFetching) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    content = (
      <Container id="product-details" sx={{ py: { xs: 16 } }}>
        <Link to="/">
          <Button variant="contained" startIcon={<ArrowBackOutlinedIcon />}>
            Back
          </Button>
        </Link>

        <Grid container spacing={1}>
          {/* Product Image */}
          <Grid item xs={12} md={4} sx={{ mt: 5 }}>
            <img
              src={product.image}
              alt="airpods"
              style={{ width: "350px", height: "300px", maxWidth: "100%" }} // Or use Material-UI styles
            />
          </Grid>
          {/* Product Detail Card */}
          <Grid item xs={12} md={4} sx={{ mt: 5 }}>
            <Typography variant="h4" component="div" color="text.primary">
              {product.name}
            </Typography>

            <Box sx={{ mt: 3 }}>
              <Divider />
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
              <Divider />
            </Box>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body1">Description</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                {product.description}
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Typography
                  variant="body1"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  Brand
                  <Typography
                    variant="body2"
                    component="span"
                    color="text.secondary"
                    sx={{ ml: 1 }}
                  >
                    {product.brand}
                  </Typography>
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Add to Cart Card */}
          <Grid
            item
            xs={12}
            md={3}
            sx={{ mt: { xs: 2, md: 5 }, ml: { xs: 0, md: 5 } }}
          >
            <List sx={style} aria-label="Add to cart">
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <ListItemText
                      primary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: "inline" }}
                            component="span"
                            variant="body2"
                            color="text.secondary"
                          >
                            Price
                          </Typography>
                        </React.Fragment>
                      }
                    />
                  </ListItemIcon>
                  <ListItemText sx={{ ml: 8 }}>
                    <Typography
                      // sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      ${product.price}
                    </Typography>
                  </ListItemText>
                </ListItemButton>
              </ListItem>
              <Divider component="li" />
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <ListItemText
                      primary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: "inline" }}
                            component="span"
                            variant="body2"
                            color="text.secondary"
                          >
                            Status
                          </Typography>
                        </React.Fragment>
                      }
                    />
                  </ListItemIcon>
                  <ListItemText sx={{ ml: 8 }}>
                    <Typography
                      // sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                    </Typography>
                  </ListItemText>
                </ListItemButton>
              </ListItem>
              <Divider component="li" />
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <ListItemText
                      primary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: "inline" }}
                            component="span"
                            variant="body2"
                            color="text.secondary"
                          >
                            Quantity
                          </Typography>
                        </React.Fragment>
                      }
                    />
                  </ListItemIcon>
                  <ListItemText sx={{ ml: 8 }}>
                    <TextField
                      id="outlined-basic"
                      //label="Quantity"
                      variant="outlined"
                      margin="normal"
                    />
                  </ListItemText>
                </ListItemButton>
              </ListItem>
              <Divider component="li" />
              <ListItem sx={{ mt: 2, mb: 2 }}>
                <Button
                  variant="contained"
                  size="large"
                  disabled={product.countInStock === 0}
                >
                  Add to Cart
                </Button>
              </ListItem>
            </List>
          </Grid>
        </Grid>

        {/* Review Card */}
        <Grid container>
          <Grid item xs={12} md={4} sx={{ mt: 5 }}>
            <Box
              sx={{
                width: 350,
                maxWidth: "100%",
                height: 40,
                bgcolor: "grey.100",
                pl: 1,
                pt: 1,
              }}
            >
              <Typography variant="body1" color="text.primary">
                Reviews
              </Typography>
            </Box>
            <Box sx={{ mt: 3 }}>
              <Box
                sx={{
                  pl: 1,

                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: 350,
                  maxWidth: "100%",
                }}
              >
                <Typography variant="body2" color="text.primary">
                  User Name
                </Typography>
                <Rating name="simple-controlled" value={3} size="small" />
                <Typography variant="caption" color="text.secondary">
                  20-03-2023
                </Typography>
              </Box>
              <Box sx={{ pl: 1, mt: 2, width: 350, maxWidth: "100%" }}>
                <Typography variant="body2" color="text.secondary">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                </Typography>
              </Box>
              <Divider sx={{ mt: 3, mb: 3, width: 350, maxWidth: "100%" }} />
            </Box>
            <Box sx={{ mt: 3 }}>
              <Box
                sx={{
                  pl: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: 350,
                  maxWidth: "100%",
                }}
              >
                <Typography variant="body2" color="text.primary">
                  User Name
                </Typography>
                <Rating name="simple-controlled" value={3} size="small" />
                <Typography variant="caption" color="text.secondary">
                  20-03-2023
                </Typography>
              </Box>
              <Box sx={{ pl: 1, mt: 2, width: 350, maxWidth: "100%" }}>
                <Typography variant="body2" color="text.secondary">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                </Typography>
              </Box>
              <Divider sx={{ mt: 3, mb: 3, width: 350, maxWidth: "100%" }} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    );
  }

  return <>{content}</>;
};

export default ProductScreen;
