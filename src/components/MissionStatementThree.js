import { Box, Button, Container, Grid, Typography } from "@mui/material";
import anime from "animejs";
import React, { useState, useEffect } from "react";
// import NftImg from "../images/MissionStatementTwo.png";
import IphoneImg from "../images/DualIphone.png";
import CheckIcon from "../images/checked-data.png";
import Link from "next/link";
const SectionWrapper = {
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "top center",
  position: "relative",
  display: "flex",
  alignItems: "center",
  overflow: "hidden",
  mt: { xs: "90px", sm: "90px", md: "90px", lg: "90px" },
  "& #sky": { zIndex: "0" },
  "& #shootingstars": { zIndex: "0" },
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

const MissionStatementThree = () => {
  const [num] = useState(60);
  const [vw, setVw] = useState(Math.max(0));
  const [vh, setVh] = useState(Math.max(0));

  const starryNight = () => {
    anime({
      targets: ["#sky .star"],
      opacity: [
        {
          duration: 700,
          value: "0",
        },
        {
          duration: 700,
          value: "1",
        },
      ],
      easing: "linear",
      loop: true,
      delay: (el, i) => 50 * i,
    });
  };

  const shootingStars = () => {
    anime({
      targets: ["#shootingstars .wish"],
      easing: "linear",
      loop: true,
      delay: (el, i) => 1000 * i,
      opacity: [
        {
          duration: 700,
          value: "1",
        },
      ],
      width: [
        {
          value: "150px",
        },
        {
          value: "0px",
        },
      ],
      translateX: 350,
    });
  };

  const randomRadius = () => {
    return Math.random() * 0.7 + 0.6;
  };

  const getRandomX = () => {
    return Math.floor(Math.random() * Math.floor(vw)).toString();
  };

  const getRandomY = () => {
    return Math.floor(Math.random() * Math.floor(vh)).toString();
  };

  useEffect(() => {
    setVw(
      Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
    );
    setVh(
      Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
    );
  }, []);

  useEffect(() => {
    starryNight();
    shootingStars();
  }, []);

  useEffect(() => {
    // Update vw and vh when the window is resized
    const handleResize = () => {
      setVw(
        Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
      );
      setVh(
        Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
      );
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Box component={"section"} sx={SectionWrapper}>
        <svg id="sky">
          {[...Array(num)].map((x, y) => (
            <circle
              cx={getRandomX()}
              cy={getRandomY()}
              r={randomRadius()}
              stroke="none"
              strokeWidth="0"
              fill="white"
              key={y}
              className="star"
            />
          ))}
        </svg>
        <div id="shootingstars">
          {[...Array(60)].map((x, y) => (
            <div
              key={y}
              className="wish"
              style={{
                left: `${getRandomY()}px`,
                top: `${getRandomX()}px`,
              }}
            />
          ))}
        </div>
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
                      "& a": {
                        color: "#23fea8",
                        fontWeight: 500,
                        fontSize: "26px",
                        marginBottom: "20px",
                        lineHeight: 1,
                        fontFamily: "Vividly !important",
                        textDecoration: "none",
                      },
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
                    "& ul": {
                      "& li": {
                        color: "#fff",
                        fontWeight: 500,
                        fontSize: "26px",
                        marginBottom: "20px",
                        lineHeight: 1,
                        fontFamily: "Vividly !important",

                        listStyleImage: `url(${CheckIcon.src})`,
                        "&::marker": {},
                      },
                    },
                  }}
                >
                  {/* <Typography component={"span"}>Our first mission</Typography> */}
                  <Typography component={"h3"}>
                    UTILITY: EXPERIENCE OUR TRADING SIGNALS AND TRADING BOTS
                  </Typography>
                  <Typography component={"p"}>
                    Right now, we're offering free signals from 3 expert
                    traders. This helps our early community members save enough
                    to purchase our NFT and evaluate the value of our signals.
                    Check out our{" "}
                    <Link
                      href="https://docs.google.com/spreadsheets/d/1N1nAiupnsNEXKXwr6vOrc8cp48Jp5QHX3OUJNoDhs94/edit#gid=0"
                      target="_blank"
                    >
                      public P&L sheet
                    </Link>{" "}
                    here: Public PnL Sheet. Additionally, Our raise funds are
                    allocated towards:
                  </Typography>
                  <Typography component={"ul"}>
                    <Typography component={"li"}>
                      Developing multiple automated Telegram trading bots that
                      operate based on set conditions. (will be beginner
                      friendly)
                    </Typography>
                    <Typography component={"li"}>
                      Providing dedicated members with essential trading
                      resources, including TradingView subscriptions, advanced
                      indicators, resources, & discounts.
                    </Typography>
                    <Typography component={"li"}>
                      Investing in AI technology for in-depth analysis across
                      500 cryptocurrencies, targeting the discovery of prime
                      trading opportunities. (updates coming soon!)
                    </Typography>
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    textAlign: "center",
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
                  <Typography component={"img"} src={IphoneImg.src} alt="" />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default MissionStatementThree;
