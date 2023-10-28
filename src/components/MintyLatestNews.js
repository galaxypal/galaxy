import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

import team from "../images/Nft-1.png";
import teamThree from "../images/Nft-7.png";
import teamFour from "../images/Nft-8.png";

const SectionWrapper = {
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "top center",
  position: "relative",
  mt: { xs: "50px", sm: "85px", md: "-210px" },
  pb: { sm: "90px" },
  "& > .NFTBg": {
    position: "absolute",
    top: "75px",
    left: "5px",
    zIndex: 0,
    marginBottom: "75px",
    display: { xs: "none", lg: "block" },
    height: "calc(100% - 150px)",
    "& img": {
      width: "165px",
      position: "sticky",
      top: "0",
      left: "0",
      animation: "latest-news-nft 4s infinite cubic-bezier(0, 0, 0.99, 0.98)",
      "@media screen and (max-width:1440px) and (min-width: 1400px)": {
        width: "110px",
      },
    },
  },
  "& .newsWrapper": {
    display: { xs: "block", sm: "flex" },
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    mb: "30px",
    "& a": {
      width: "118px%",
      boxShadow: "0px 0px 4px 0px #00000066;",
      borderRadius: "20px",
      padding: "5px 35px",
      textAlign: "center",
      height: "50px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#ffffff2e",
      mt: { xs: "30px", sm: "0" },
      "& img": {
        width: "100px",
      },
      "& .ap": {
        width: "100px",
      },
    },
  },
  "& > .NftSecoundBg": {
    position: "absolute",
    top: "75px",
    right: "5px",
    zIndex: 0,
    marginBottom: "75px",
    display: { xs: "none", lg: "block" },
    height: "calc(100% - 150px)",
    "& img": {
      width: "225px",
      position: "sticky",
      top: "0",
      left: "0",
      animation: "latest-news-nft 4s infinite cubic-bezier(0, 0, 0.99, 0.98)",
      "@media screen and (max-width:1440px) and (min-width: 1400px)": {
        width: "155px",
      },
    },
  },
  "& > .LatestNewsShap": {
    width: "100%",
    position: "absolute",
    top: { xs: "-12px", sm: "-25px", md: "-36px", lg: "-43px" },
    left: "0",
    zIndex: 0,
  },
  "& > .AverageGameShap": {
    width: "100%",
    position: "absolute",
    bottom: { md: "-36px", lg: "-47px", xl: "-51px" },
    left: "0",
    zIndex: 1,
  },
};
const TheTrailerServices = {
  borderRadius: "40px",
  width: { sm: "calc(70% - 60px)", md: "100%" },
  pb: "30px",
  textAlign: "center",
  marginLeft: "auto",
  marginRight: "auto",
  position: "relative",
  mt: { xs: "20px", sm: "55px" },
  mb: { xs: "40px", sm: "70px" },
  "& h3": {
    color: "#FFFFFF",

    fontSize: "24px",
    fontWeight: 700,
    textShadow: "0px 3px 1px #a6722a",
  },
  "& .ecoBattery": {
    "@media screen and (max-width:600px)": {
      mt: "-19px",
    },
  },

  "& .cardHeaderTop": {
    backgroundColor: "#F39F19",
    borderRadius: "100px",
    padding: "25px",
  },
  "& .planet_hero": {
    color: " #fff",
    textTransform: "uppercase",
    fontSize: "24px",
  },
  "& .emissions": {
    color: " #004BBF",
  },
  "& .save_planet": {
    color: " #fff",
    textTransform: "uppercase",
    fontSize: "24px",
  },
  "& p": {
    color: "#B76229",
    fontSize: "16px",
    fontWeight: 700,
    pt: "20px",
  },
  "& img": {
    width: "70%",
    transition: "all 0.5s ease",
    mt: "-20px",
  },
};

const MintyLatestNews = () => {
  return (
    <>
      <Box component={"section"} sx={SectionWrapper} id="Team">
        <Container>
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={2}
              sx={{ position: "relative", zIndex: "1", mt: "0" }}
            >
              <Grid item xs={12} md={12}>
                <Typography
                  sx={{
                    textAlign: "center",
                    color: "#ffffff",
                    textShadow: "4px 4px 1px #a6722a",
                    fontSize: "40px",
                    zIndex: 1,
                    mb: "60px",
                    position: "relative",
                  }}
                  component={"h2"}
                >
                  Meet the Team
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              spacing={2}
              sx={{
                position: "relative",
                zIndex: "1",
                mt: "0",
                justifyContent: "center",
              }}
            >
              <Grid item xs={12} md={4}>
                <Box sx={TheTrailerServices}>
                  <Typography
                    sx={{ borderRadius: "50%" }}
                    component={"img"}
                    src={team.src}
                    alt=""
                  />
                  <Typography
                    sx={{ color: "#ffff" }}
                    component={"p"}
                    className="planet_hero"
                  >
                    {" "}
                    @mina_monk
                    <br />
                    <Typography
                      component={"span"}
                      sx={{ fontSize: "16px", color: "white" }}
                    >
                      {" "}
                      Member 1 Designation
                    </Typography>
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box sx={TheTrailerServices}>
                  <Typography
                    sx={{ borderRadius: "50%" }}
                    component={"img"}
                    src={teamThree.src}
                    alt=""
                  />
                  <Typography component={"p"} className="planet_hero">
                    {" "}
                    @growthHackz
                    <br />
                    <Typography
                      component={"span"}
                      sx={{ fontSize: "16px", color: "white" }}
                    >
                      {" "}
                      Member 2 Designation
                    </Typography>
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box sx={TheTrailerServices}>
                  <Typography
                    sx={{ borderRadius: "50%" }}
                    className="ecoBattery"
                    component={"img"}
                    src={teamFour.src}
                    alt=""
                  />

                  <Typography
                    sx={{ color: "#ffff" }}
                    component={"p"}
                    className="save_planet"
                  >
                    @SWIFT
                    <br />
                    <Typography
                      component={"span"}
                      sx={{ fontSize: "16px", color: "white" }}
                    >
                      {" "}
                      Member 3 Designation
                    </Typography>
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Grid
              container
              spacing={2}
              sx={{ mt: "0", justifyContent: "center" }}
            >
              <Grid item xs={12} md={12}>
                <Box
                  sx={{
                    "& h2": {
                      textAlign: "center",
                      color: "#F39F19",
                      textShadow: "4px 4px 1px #a6722a",
                      fontSize: "40px",
                      marginBottom: "-50px",
                      zIndex: 2,
                      position: "relative",
                      "@media only screen and (max-width:1024px)": {
                        marginBottom: "-35px",
                        fontSize: "30px",
                      },
                      "@media only screen and (max-width:768px)": {
                        fontSize: "25px",
                      },
                    },
                  }}
                ></Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default MintyLatestNews;
