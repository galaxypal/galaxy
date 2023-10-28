import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import NftImg from "../images/MissionStatementTwo.png";

const SectionWrapper = {
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "top center",
  position: "relative",
  display: "flex",
  alignItems: "center",
  mt: "90px",
  "& .BackShap": {
    boxShadow: "0px 7px 20px rgba(0, 0, 0, 0.4)",
    borderRadius: { xs: "0", lg: "65px 0px 0px 65px" },
    padding: "240px 0",
    width: { xs: "100%", sm: "100%", lg: "70%" },
    position: "absolute",
    top: "calc(50% - 240px)",
    right: "0",
    zIndex: 0,
    backgroundColor: "#ffffff33",
  },
};

const MissionStatementTwo = () => {
  return (
    <>
      <Box component={"section"} sx={SectionWrapper}>
        {/* <Box
          className="BackShap"
          sx={{ display: { xs: "none", md: "block" } }}
        ></Box> */}
        <Container sx={{ zIndex: "1" }} maxWidth="">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={13} sx={{ mt: "0" }}>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    textAlign: "right",
                    "@media screen and (max-width:768px)": {
                      display: "flex",
                      justifyContent: "center",
                    },
                    "& img": {
                      width: "78%",
                      position: "relative",
                      zIndex: 5,
                      animation: "average-game-animation-reverse 1.5s ease-out",
                      borderRadius: "25px",
                      "@media screen and (min-width:1366px) ": {},
                    },
                  }}
                >
                  <Typography component={"img"} src={NftImg.src} alt="" />
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    // width: { xs: "100%", sm: "84%" },
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    ml: "auto",
                    "& h3": {
                      color: "#fff",
                      fontWeight: 100,
                      fontSize: "80px",
                      borderBottom: "2px solid #fff",
                      marginBottom: "38px",
                      position: "relative",
                      width: "100%",
                      lineHeight: 0.7,
                      fontFamily: "Vividly !important",
                      textTransform: "uppercase",
                      "&::after": {
                        content: "''",
                        width: "0",
                        height: "0",
                        borderBottom: "15px solid #ffffff",
                        borderLeft: "15px solid transparent",
                        position: "absolute",
                        right: "0",
                        bottom: "0",
                      },
                    },
                    "& h6": {
                      color: "#FFFF00",
                      fontWeight: 700,
                      fontSize: "18px",
                      marginBottom: "0px",
                    },
                    "& p": {
                      color: "#fff",
                      fontWeight: 500,
                      fontSize: "26px",
                      marginBottom: "20px",
                      lineHeight: 0.9,
                      fontFamily: "Vividly !important",
                      textTransform: "uppercase",
                    },
                    "& button": {
                      background:
                        "linear-gradient(180deg, #89CFF0 -52.31%, #85CDEE -12.72%, #7AC6E8 21.75%, #69BCDE 54.22%, #50AED0 85.41%, #309BBE 115.5%, #1F92B5 129%)",
                      backgroundColor: "#ffffff",
                      borderRadius: "0",
                      textTransform: "capitalize",
                      padding: "9px 32px",
                      fontWeight: 700,
                      color: "#fff",
                      borderRadius: "50px",
                    },
                  }}
                >
                  <Typography component={"h3"}>
                    Mission Statement #2
                    <br />
                    Satoshi Nakamoto Investigation
                  </Typography>

                  <Typography component={"p"}>
                    The Galactic Gang is dedicated to uncovering the true
                    identity of Satoshi Nakamoto, Bitcoin's enigmatic creator,
                    and revealing his current crypto project involvement. Our
                    research team, utilizing cutting-edge AI models, is on the
                    verge of making significant discoveries, adding a
                    captivating dimension to our community's journey.
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

export default MissionStatementTwo;
