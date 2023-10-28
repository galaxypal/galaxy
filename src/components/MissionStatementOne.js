import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import NftImg from "../images/MissionStatementOne.png";

const SectionWrapper = {
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "top center",
  position: "relative",
  display: "flex",
  alignItems: "center",
  mt: { xs: "260px", md: "90px" },
  "& .BackShap": {
    boxShadow: "0px 7px 20px rgba(0, 0, 0, 0.4)",
    borderRadius: { xs: "0", lg: "0px 65px 65px 0px" },
    padding: "240px 0",
    width: { xs: "100%", sm: "100%", lg: "70%" },
    position: "absolute",
    top: "calc(50% - 240px)",
    left: "0",
    zIndex: 0,
    backgroundColor: "#ffffff33",
  },
};

const MissionStatementOne = () => {
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
                    // width: { xs: "100%", sm: "84%" },
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
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
                      letterSpacing: "-2px",
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
                      lineHeight: 1,
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
                    "& span": {
                      backgroundColor: "#23fea8",
                      color: "#000",
                      fontWeight: 100,
                      fontSize: "20px",
                      marginBottom: "25px",
                      lineHeight: 0.7,
                      fontFamily: "Vividly !important",
                      textTransform: "uppercase",
                      letterSpacing: "0px",
                      padding: "6px 12px 3px",
                      borderRadius: "50px",
                    },
                  }}
                >
                  <Typography component={"span"}>
                    Unified Mission Statement
                  </Typography>
                  <Typography component={"h3"}>
                    Trading Excellence and Market Mastery
                  </Typography>

                  <Typography component={"p"}>
                    Welcome to the Galactic Pals, where we merge the art of
                    trading with detective-like market analysis to create a
                    powerhouse community. Our primary focus is empowering
                    members to achieve financial prosperity through informed
                    trading decisions, backed by exclusive signals from a trader
                    with over 300% monthly returns and our usage of advanced
                    AI-driven crypto analysis.
                  </Typography>
                  <Typography component={"p"}>
                    We pride ourselves on being trading detectives, adept at
                    navigating market manipulations and profiting from
                    anomalies. Our technical analysis expertise transforms us
                    into market maestros, trading with the precision of market
                    makers.As we navigate the crypto world's complexities, we
                    also embark on thrilling side quests.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    "@media screen and (max-width:768px)": {
                      display: "flex",
                      justifyContent: "center",
                    },
                    "& img": {
                      width: "78%",
                      position: "relative",
                      zIndex: 5,
                      animation: "average-game-animation 1.5s ease-out",
                      // borderRadius: "25px",
                      "@media screen and (min-width:1366px) ": {},
                    },
                  }}
                >
                  <Typography component={"img"} src={NftImg.src} alt="" />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default MissionStatementOne;
