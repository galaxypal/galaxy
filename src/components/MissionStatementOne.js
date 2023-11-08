import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
// import NftImg from "../images/Nftimggif.gif";
import NftImg from "../images/NftimgNew.gif";

const SectionWrapper = {
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "top center",
  position: "relative",
  display: "flex",
  alignItems: "center",
  mt: { xs: "90px", sm: "90px", md: "90px", lg: "100px" },
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
      <Box component={"section"} sx={SectionWrapper} id="About">
        {/* <Box
          className="BackShap"
          sx={{ display: { xs: "none", md: "block" } }}
        ></Box> */}
        <Container sx={{ zIndex: "1" }} maxWidth="">
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={{ xs: 10, md: 13, lg: 13 }}
              sx={{ mt: "0" }}
              flexDirection={{ xs: "column-reverse", md: "row" }}
            >
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
                      // textTransform: "uppercase",
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
                    We get it, you want financial freedom– Galaxy Pals exists to
                    provide NFT holders with trading signals and exclusive
                    insights from top-tier traders. It's not just about owning
                    digital art, each NFT unlocks access to our community of
                    traders, cool airdrops, and a bunch of pals all aiming to
                    make a bank.
                  </Typography>
                  <Typography component={"p"}>
                    To enhance your experience, We also handpick the sharpest
                    seasonal guest traders across the globe to beam their expert
                    signals straight to you, with live market sessions, so you
                    can learn from more traders. Our mission is to empower our
                    members with sharp trading insights, provided by elite
                    traders known for their market consistency, and enhanced by
                    strategic AI-driven crypto analysis.
                  </Typography>
                  {/* <Typography component={"p"}>
                    We are adept at navigating market manipulations and
                    profiting from anomalies, with our technical analysis
                    expertise transforming us into market maestros, trading with
                    the precision of market makers. As we navigate the crypto
                    world's complexities, we also embark on thrilling side
                    quests, further enriching our community experience.
                  </Typography> */}
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
                      width: { xs: "100%", md: "78%" },
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
