import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Telegram from "../images/Telegram.png";
import DiscordSocial from "../images/DiscordSocial.png";
import twitter from "../images/twitter.png";
import Logo from "../images/WhiteLogo.png";
import Instagram from "../images/instagram.png";

const SectionWrapper = {
  // backgroundColor: "#c27f14",
  // backgroundColor: "#1F7F94",
  padding: "40px 0 40px",
  // mt: "-15px",
};
const LogoWrapper = {
  textAlign: { xs: "center", sm: "left" },
  "& img": { width: { xs: "200px", md: "200px", lg: "100%" }, mt: "20px" },
};
const MenuWrapper = {
  position: "relative",
  "&.fourthColumn": {
    "&::before": {
      content: "''",
      position: "absolute",
      height: "calc(100% - 100px)",
      width: "1px",
      backgroundColor: "#fff",
      right: 0,
      top: "20px",
      display: { xs: "none", md: "block" },
    },
  },

  "& p, p > a": {
    fontWeight: 500,
    fontSize: "23px",
    lineHeight: "32px",
    pt: "20px",
    color: "#FFFFFF",
    textDecoration: "none",
    textAlign: { xs: "center", sm: "left" },
    textTransform: "uppercase",
    fontFamily: "Vividly!important",
  },
};
const SocialWrapper = {
  // pl: { xs: "0", sm: "40px" },
  "@media screen and (min-width:1920px)": {
    pl: "0",
  },
  "& p": {
    fontWeight: 500,
    fontSize: "23px",
    lineHeight: "32px",
    pt: "20px",
    color: "#FFFFFF",
    textAlign: { xs: "center", sm: "let" },
    textTransform: "uppercase",
    fontFamily: "Vividly!important",
  },
  "& .SocialMediaWrapper": {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    justifyContent: { xs: "center", lg: "center" },
    marginTop: { xs: "15px", sm: "0" },
  },
};

const Footer = () => {
  return (
    <>
      <Box component={"footer"} sx={SectionWrapper}>
        <Container
          sx={{
            "@media screen and (min-width:1920px)": {
              pl: "0",
              pr: "0",
            },
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={2}
              sx={{
                mt: "0",
                justifyContent: { sm: "space-around", md: "space-around" },
                "@media screen and (min-width:1920px)": {
                  justifyContent: "space-between",
                },
              }}
            >
              <Grid item xs={12} sm={4} lg={2}>
                <Box sx={LogoWrapper}>
                  {/* <Typography
                    component={"p"}
                    sx={{
                      fontFamily: "'Londrina Outline',cursive!important",
                      color: "white",
                      fontSize: "40px",
                      alignSelf: "center",
                      width: "100%",
                      textAlign: "center",
                      justifySelf: "center",
                      margin: "0 auto",
                    }}
                  >
                    GALAXY <br /> PALS
                  </Typography> */}
                  <Typography
                    className="Logo"
                    component={"img"}
                    src={Logo.src}
                    alt=""
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={4} lg={2}>
                <Box sx={MenuWrapper}>
                  <Typography component={"p"}>
                    <Typography component={"a"} href={"#About"}>
                      {" "}
                      About
                    </Typography>
                  </Typography>
                  <Typography component={"p"}>
                    <Typography component={"a"} href={"#Roadmap"}>
                      Roadmap
                    </Typography>
                  </Typography>
                  <Typography component={"p"}>
                    <Typography component={"a"} href={"#Team"}>
                      Team
                    </Typography>
                  </Typography>
                  {/* <Typography component={"p"}>Marketplace</Typography> */}
                  {/* <Typography component={"p"}>
                    <Typography component={"a"} href={"#Blog"}>
                      Blog
                    </Typography>
                  </Typography> */}
                  {/* <Typography component={"p"}>
                    <Typography component={"a"} href={"#FAQ"}>
                      FAQ
                    </Typography>
                  </Typography> */}
                </Box>
              </Grid>
              <Grid item xs={12} sm={4} lg={2}>
                <Box sx={MenuWrapper}>
                  <Typography component={"p"}>
                    <Typography component={"a"} href={"#Contact"}>
                      Contact us
                    </Typography>
                  </Typography>
                  {/* <Typography component={"p"}>
                    <Typography
                      component={"a"}
                      href={"https://goo.gl/maps/kR5FaUEmAaxNuy227"}
                      target="_blank"
                    >
                      Digital Ventures Group 14 Wall street Manhattan NY 10005{" "}
                    </Typography>
                  </Typography> */}
                </Box>
              </Grid>
              <Grid item xs={12} sm={4} lg={2}>
                <Box sx={MenuWrapper} className="fourthColumn">
                  <Typography component={"p"}>
                    <Typography component={"a"} href={"#About"}>
                      About GalaxyFrens
                    </Typography>
                  </Typography>
                  <Typography component={"p"}>
                    <Typography
                      component={"a"}
                      // href={PolicyFile}
                      target="_blank"
                    >
                      Policy
                    </Typography>
                  </Typography>
                  <Typography component={"p"} sx={{ mt: "40px" }}>
                    <Typography
                      component={"a"}
                      href="mailto:galaxypal4@gmail.com"
                    >
                      galaxypal4@gmail.com
                    </Typography>
                  </Typography>
                  {/* <Typography component={"p"}>Whitepaper</Typography> */}
                  {/* <Typography component={"p"}>Report</Typography> */}
                </Box>
              </Grid>
              <Grid item xs={12} sm={5} lg={2.4}>
                <Box sx={SocialWrapper}>
                  <Typography component={"p"}>COMMUNITY</Typography>
                  <Box className="SocialMediaWrapper">
                    <Typography component={"a"} href="#" target="_blank">
                      <Typography component={"img"} src={twitter.src} alt="" />
                    </Typography>
                    <Typography component={"a"} href="#" target="_blank">
                      <Typography component={"img"} src={Telegram.src} alt="" />
                    </Typography>
                    <Typography component={"a"} href="#" target="_blank">
                      <Typography
                        component={"img"}
                        src={Instagram.src}
                        alt=""
                      />
                    </Typography>
                    <Typography component={"a"} href="#" target="_blank">
                      <Typography
                        component={"img"}
                        src={DiscordSocial.src}
                        alt=""
                      />
                    </Typography>

                    {/* <Typography
                      component={"a"}
    
                      target="_blank"
                    >
                      <Typography component={"img"} src={telegram} alt="" />
                    </Typography>
                    <Typography
                      component={"a"}
                      href="https://instagram.com/pawfury_official?igshid=MmIzYWVlNDQ5Yg=="
                      target="_blank"
                    >
                      <Typography component={"img"} src={instagram} alt="" />
                    </Typography> */}
                    {/* <Typography component={"a"} href="#">
                      <Typography component={"img"} src={discord} alt="" />
                    </Typography> */}
                  </Box>
                  <Typography component={"p"} sx={{ mt: "40px" }}>
                    GALAXY PALS @2023
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
