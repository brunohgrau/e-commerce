import React from "react";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

const RegisterScreen = () => {
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
        Register
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
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="emailadress"
            label="Email Adress"
            // type="password"
            id="emailadress"
            //autoComplete="current-password"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            // type="password"
            id="password"
            //autoComplete="current-password"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="confirmpassword"
            label="Confirm Password"
            // type="password"
            id="confirmpassword"
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
        <Typography variant="body2">Already have an account?</Typography>
        <Link href="/login" variant="body2" sx={{ ml: 2 }}>
          Login
        </Link>
      </Box>
    </Container>
  );
};

export default RegisterScreen;
