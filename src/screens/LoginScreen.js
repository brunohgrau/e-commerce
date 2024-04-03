import React from "react";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

const LoginScreen = () => {
  return (
    <Container sx={{ py: { xs: 14 } }} maxWidth="xs">
      <CssBaseline />

      {/* Page Header */}

      <Typography
        component="h4"
        variant="h4"
        color="text.primary"
        //sx={{ mb: 1 }}
      >
        Login
      </Typography>

      {/* Form */}

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="address"
            label="Address"
            name="address"
            autoComplete="address"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="city"
            label="City"
            // type="password"
            id="city"
            //autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            href="/payment"
          >
            Enter
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography variant="body2">New Customer?</Typography>
        <Link href="/register" variant="body2" sx={{ ml: 2 }}>
          Register
        </Link>
      </Box>
    </Container>
  );
};

export default LoginScreen;
