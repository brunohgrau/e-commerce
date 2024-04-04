import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import ListItemIcon from "@mui/material/ListItemIcon";
import MenuIcon from "@mui/icons-material/Menu";
import DiamondIcon from "@mui/icons-material/Diamond";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import Link from "@mui/material/Link";
import { LinkOutlined } from "@mui/icons-material";

/*Search Component*/

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

/*Drawer Component Width*/

const drawerWidth = 240;

const Header = () => {
  /*Drawer Component Logic*/
  const [mobileOpen, setMobileOpen] = useState(false);
  const ToggleDrawer = () => {
    setMobileOpen((prevState) => !prevState);
  };
  /*Drawer Component*/
  const drawer = (
    <Box onClick={ToggleDrawer} sx={{ textAlign: "center" }}>
      {/* Drawer Header*/}
      <Box
        sx={{
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
          ml: 2,
        }}
      >
        <DiamondIcon sx={{ mr: 1 }} />

        <Typography variant="h6" sx={{ my: 2 }}>
          E-Commerce
        </Typography>
      </Box>
      <Divider />
      {/* Drawer List*/}
      <List>
        <ListItem disablePadding>
          <ListItemButton href="/cart">
            <ListItemIcon>
              <Badge badgeContent={1} color="secondary">
                <ShoppingCartIcon sx={{ mr: -2 }} />
              </Badge>
            </ListItemIcon>

            <ListItemText primary={"Cart"} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <PersonIcon sx={{ mr: -2 }} />
            </ListItemIcon>
            <ListItemText primary={"Login"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar component="nav">
          <Toolbar>
            {/* Shopname  and Logo*/}
            <Box sx={{ display: "flex", flexGrow: 1, alignItems: "center" }}>
              <DiamondIcon sx={{ mr: 1 }} />
              <Typography variant="h6" component="div">
                <Link underline="none" href="/" color={"white"}>
                  Shop Name
                </Link>
              </Typography>
            </Box>

            {/* Search Bar*/}
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Box>
            {/*Buttons*/}
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <IconButton sx={{ color: "#fff" }}>
                <Badge badgeContent={1} color="secondary">
                  <ShoppingCartIcon sx={{ mr: -2 }} />
                </Badge>
              </IconButton>

              <Button sx={{ color: "#fff" }} href="/cart">
                Cart
              </Button>
              <IconButton sx={{ color: "#fff" }}>
                <PersonIcon sx={{ mr: -2 }} />
              </IconButton>

              <Button sx={{ color: "#fff" }} href="/login">
                Sign In
              </Button>
            </Box>
            {/* Menu Icon*/}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={ToggleDrawer}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        {/* Drawer*/}
        <nav>
          <Drawer
            anchor="right"
            variant="temporary"
            open={mobileOpen}
            onClose={ToggleDrawer}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Box>
    </>
  );
};

export default Header;
