import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

const DeskMenu = {
  mt: "10px",
  mb: "10px",
  display: "block",

  borderRadius: "0",
  textTransform: "capitalize",
  // borderRight: "2px solid #533db21a",
  paddingLeft: "20px",
  paddingRight: "20px",
  color: "#B76229",
  fontWeight: 700,
  textDecoration: "none",
  fontSize: "16px",

  "& a": {
    color: "#ffffff",
    fontWeight: 700,
    textDecoration: "none",
    textShadow:
      "0 0 5px #00FF00,0 0 10px #00FF00,0 0 15px #00FF00,0 0 20px #00FF00,0 0 25px #00FF00,0 0 30px #00FF00",
  },

  "&:nth-of-type(1)": {
    borderTopLeftRadius: "50px",
    borderBottomLeftRadius: "50px",
  },
  "&:last-of-type": {
    borderTopRightRadius: "50px",
    borderBottomRightRadius: "50px",
    borderRight: "none",
  },
  "&.Selected": {
    backgroundColor: "#F7931E",
    color: "#ffffff",
  },
  "&.SubMenuBtn": {
    "&::after": {
      content: "''",
      width: "0%",
      height: "0%",
      borderBottom: "8px solid #B76229",
      borderLeft: "8px solid transparent",
      position: "absolute",
      right: "10px",
      bottom: "8px",
    },
    "&.Selected": {
      borderBottomRightRadius: "0px",
      borderTopRightRadius: "20px",
      "&::after": {
        borderBottom: "10px solid #ffffff",
      },
    },
  },
  "&.PawUniverse": {
    "&::after": {
      content: "''",
      width: "0%",
      height: "0%",
      borderBottom: "8px solid #B76229",
      borderLeft: "8px solid transparent",
      position: "absolute",
      right: "10px",
      bottom: "8px",
    },
    "&.Selected": {
      "&::after": {
        borderBottom: "10px solid #ffffff",
      },
    },
  },
};

const pages = [
  { label: "Home", menulink: "#" },
  { label: "About", menulink: "#About" },
  { label: "Universe", menulink: "#Game" },
  { label: "Media", menulink: "#Roadmap" },
  { label: "$PAW Token", menulink: "#TheGame" },
  { label: "Get Started", menulink: "#Maps" },
  { label: "Community", menulink: "#" },
];

const Header = ({ setValue }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const [anchorElPawUniverse, setAnchorElPawUniverse] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };
  const handleClickPawUniverse = (event) => {
    setAnchorElPawUniverse(event.currentTarget);
  };

  const handleClosePawUniverse = () => {
    setAnchorElPawUniverse(null);
  };
  const handleClose3 = (index) => {
    setValue(index);
    setAnchorEl2(null);
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
          //   backgroundImage: `url(${HeaderShap})`,
          //   backgroundRepeat: "no-repeat",
          //   backgroundSize: "contain",
          //   backgroundPosition: "top center",
          position: "relative",
          zIndex: "99999999999999",
          overflow: "hidden",
          mb: "-60px",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ minHeight: { sm: "55px" } }}>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", lg: "none" },
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {/* <Typography
                component={"img"}
                src={Logo}
                alt=""
                sx={{ width: "100px" }}
              /> */}
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                sx={{
                  background:
                    "linear-gradient(180deg, #89CFF0 -52.31%, #85CDEE -12.72%, #7AC6E8 21.75%, #69BCDE 54.22%, #50AED0 85.41%, #309BBE 115.5%, #1F92B5 129%)",
                }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  zIndex: "9999999999",
                  display: { xs: "block", lg: "none" },
                  "& a": {
                    color: "#000",
                    fontWeight: 700,
                    textDecoration: "none",
                  },
                }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography component={"a"} href="#About">
                    <Typography textAlign="right">About</Typography>
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography component={"a"} href="#Roadmap">
                    <Typography textAlign="right">Roadmap</Typography>
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography component={"a"} href="#Team">
                    <Typography textAlign="right">Team</Typography>
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography component={"a"} href="#FAQ">
                    <Typography textAlign="right">FAQ</Typography>
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", lg: "flex" },
                justifyContent: "center",
              }}
            >
              <Button sx={DeskMenu} onClose={handleClose2}>
                <Typography component={"a"} href="#About">
                  About
                </Typography>
              </Button>
              <Button sx={DeskMenu} onClose={handleClose2}>
                <Typography component={"a"} href="#Roadmap">
                  Roadmap
                </Typography>
              </Button>
              <Button sx={DeskMenu} onClose={handleClose2}>
                <Typography component={"a"} href="#Team">
                  Team
                </Typography>
              </Button>
              <Button sx={DeskMenu} onClose={handleClose2}>
                <Typography component={"a"} href="#FAQ">
                  FAQ
                </Typography>
              </Button>
            </Box>
          </Toolbar>
        </Container>
        {/* <Typography
          sx={HeaderShapStyle}
          component={"img"}
          src={HeaderShap}
          alt=""
        /> */}
      </AppBar>
    </>
  );
};

export default Header;
