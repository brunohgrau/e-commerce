import React from "react";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";

const steps = ["Shipping", "Payment", "Order"];

const style = {
  p: 0,
  width: "100%",
  maxWidth: 360,
  borderRadius: 2,
  border: "1px solid",
  borderColor: "divider",
  backgroundColor: "background.paper",
};

const PlaceOrderScreen = () => {
  return (
    <Container sx={{ py: { xs: 14 } }}>
      <CssBaseline />
      {/* <Button
        variant="contained"
        startIcon={<ArrowBackOutlinedIcon />}
        href="/payment"
      >
        Back
      </Button> */}
      {/* Stepper */}
      <Container spacing={1} maxWidth="xs">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            mb: 4,
            //alignItems: "flex-end",
            //flexGrow: 1,
            // height: 150,
          }}
        >
          <Stepper
            id="desktop-stepper"
            // activeStep={activeStep}
            sx={{
              width: "100%",
              height: 10,
            }}
          >
            {steps.map((label) => (
              <Step
                sx={{
                  ":first-child": { pl: 0 },
                  ":last-child": { pr: 0 },
                }}
                key={label}
              >
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
      </Container>
      <Grid container>
        {/* Empty Grid*/}
        <Grid item xs={12} md={2}>
          <Box></Box>
        </Grid>
        {/* Place Order Details */}
        <Grid item xs={12} md={5} sx={{ mt: 5 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "left",
            }}
          >
            <Typography variant="h6" component="div" color="text.primary">
              Shipping
            </Typography>
            <Typography
              variant="body2"
              component="div"
              color="text.primary"
              sx={{ mt: 1 }}
            >
              Address: Avenida 123
            </Typography>
            <Divider sx={{ mt: 2 }} />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "left",
              mt: 3,
            }}
          >
            <Typography variant="h6" component="div" color="text.primary">
              Payment Method
            </Typography>
            <Typography
              variant="body2"
              component="div"
              color="text.primary"
              sx={{ mt: 1 }}
            >
              Method: Paypal
            </Typography>
            <Divider sx={{ mt: 2 }} />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "left",
              mt: 3,
            }}
          >
            <Typography variant="h6" component="div" color="text.primary">
              Order Items
            </Typography>
            <Typography
              variant="body2"
              component="div"
              color="text.primary"
              sx={{ mt: 1 }}
            >
              Method: Paypal
            </Typography>
            <Divider sx={{ mt: 2 }} />
          </Box>
        </Grid>

        {/* Order Summary Card */}
        <Grid item xs={12} md={3} sx={{ mt: 5, ml: { xs: 0, md: 7 } }}>
          <List sx={style} aria-label="Add to cart">
            {/* Order Summary Card - Title*/}
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ListItemText
                    primary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="h5"
                          color="text.secondary"
                        >
                          Order Summary
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <Divider component="li" />
            {/* Order Summary Card - Item*/}
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
                          Items
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
                    $600
                  </Typography>
                </ListItemText>
              </ListItemButton>
            </ListItem>
            <Divider component="li" />
            {/* Order Summary Card - Shipping*/}
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
                          Shipping
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
                    $10
                  </Typography>
                </ListItemText>
              </ListItemButton>
            </ListItem>
            <Divider component="li" />
            {/* Order Summary Card - Tax*/}
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
                          Tax
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
                    $1
                  </Typography>
                </ListItemText>
              </ListItemButton>
            </ListItem>
            <Divider component="li" />
            {/* Order Summary Card - Total*/}
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
                          Total
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
                    $700
                  </Typography>
                </ListItemText>
              </ListItemButton>
            </ListItem>
            {/* Order Summary Card - Button*/}
            <ListItem sx={{ mt: 2, mb: 2 }}>
              <Button variant="contained" size="large" href="/ordersummary">
                Place Order
              </Button>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PlaceOrderScreen;
