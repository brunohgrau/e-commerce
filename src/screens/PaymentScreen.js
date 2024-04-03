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
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const steps = ["Shipping", "Payment", "Order"];

const PaymentScreen = () => {
  return (
    <Container sx={{ py: { xs: 14 } }} maxWidth="xs">
      <CssBaseline />
      {/* Stepper */}
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
      {/* Page Header */}

      <Typography
        component="h4"
        variant="h4"
        color="text.primary"
        //sx={{ mb: 1 }}
      >
        Payment Method
      </Typography>

      {/* Form */}

      <Box>
        <FormControl sx={{ mt: 3 }}>
          <FormLabel id="demo-radio-buttons-group-label">
            Select Method
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            sx={{ mt: 1 }}
          >
            <FormControlLabel
              value="paypal"
              control={<Radio />}
              label="Paypal"
            />
            <FormControlLabel
              value="creditcard"
              control={<Radio />}
              label="Credit Card"
            />
            <FormControlLabel
              value="googlepay"
              control={<Radio />}
              label="Google Pay"
            />
          </RadioGroup>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            href="/placeorder"
          >
            Continue
          </Button>
        </FormControl>
      </Box>
    </Container>
  );
};

export default PaymentScreen;
