import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import MenuIcon from "@mui/icons-material/Menu";
import { Container, Menu, MenuItem, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import { useState } from "react";
import MainMenu from "./mainMenu";

function Navbar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const openMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const navigate = useNavigate();

  const handleClose = () => {
    setAnchorEl(null);
  };

  const homeClicked = () => {
    navigate("/");
  };

  return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={openMenu}
            >
              <MenuIcon />
            </IconButton>
            <MainMenu
              open={open}
              handleClose={handleClose}
              anchorEl={anchorEl}
            />
            <Container>
              <Button
                variant="text"
                onClick={homeClicked}
                sx={{ color: "white" }}
              >
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Mathmate
                </Typography>
              </Button>
            </Container>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => {
                window.open(
                  "https://github.com/Mathmate-il",
                  "_blank",
                  "noreferrer"
                );
              }}
            >
              <GitHubIcon />
            </IconButton>
            <Button color="inherit" variant="outlined">
              Sign In
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
  );
}

export default Navbar;
