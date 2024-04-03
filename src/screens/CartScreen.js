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
import CardMedia from "@mui/material/CardMedia";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Link from "@mui/material/Link";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

const style = {
  p: 0,
  width: 360,
  maxWidth: "100%",
  borderRadius: 2,
  border: "1px solid",
  borderColor: "divider",
  backgroundColor: "background.paper",
};

const CartScreen = () => {
  return (
    <Container id="product-details" sx={{ py: { xs: 16 } }}>
      {/* Page Header*/}
      <Box
        sx={{
          display: "flex",
          justifyContent: { sm: "start" },
        }}
      >
        <Typography component="h2" variant="h4" color="text.primary">
          Shopping Cart
        </Typography>
      </Box>
      <Grid container spacing={1}>
        {/* Product Image */}
        <Grid item xs={12} md={1} sx={{ mt: 5 }}>
          <ImageList cols={1}>
            <ImageListItem>
              <img
                src="../../images/airpods.jpg"
                alt="airpods"
                sx={{ width: "100px", height: "80px", maxWidth: "100%" }}
                // style={{ width: "100px", height: "80px", maxWidth: "100%" }} // Or use Material-UI styles
              />
            </ImageListItem>
          </ImageList>
        </Grid>
        {/* Product Name and Price */}
        <Grid
          item
          xs={12}
          md={2}
          sx={{ mt: { sm: 5, md: 7 }, ml: { sm: 0, md: 3 } }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="body2" component="div" color="text.primary">
              <Link href="/details" color="text.primary">
                Product Name
              </Link>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              $599
            </Typography>
          </Box>
        </Grid>
        {/* Product Quantity  & Product Delete */}
        <Grid
          item
          xs={12}
          md={1.5}
          sx={{ mt: { sm: 2, md: 5 }, ml: { sm: 0, md: 8 } }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <TextField
              id="outlined-basic"
              //label="Quantity"
              fullWidth
              size="small"
              variant="outlined"
              margin="normal"
            />
            <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </Box>
        </Grid>
        {/* Product Summary*/}
        <Grid
          item
          xs={12}
          md={3}
          sx={{ mt: { xs: 2, md: -4 }, ml: { xs: 0, md: 18 } }}
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
                          Subtotal (1) item
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText>
                  <Typography
                    // sx={{ display: "inline" }}
                    component="span"
                    variant="h4"
                    color="text.primary"
                  >
                    $599
                  </Typography>
                </ListItemText>
              </ListItemButton>
            </ListItem>

            <Divider component="li" />
            <ListItem sx={{ mt: 2, mb: 2 }}>
              <Button variant="contained" size="large" href="/shipping">
                Proceed to checkout
              </Button>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CartScreen;
