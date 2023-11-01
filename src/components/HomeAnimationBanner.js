import React, { useEffect, useRef } from "react";
import { Box, Button, Typography } from "@mui/material";
// import BannerImg from "../images/Bannerbgimagupdated.png";
import BannerImg from "../images/BgBannerNew.png";
import Logo from "../images/WhiteLogo.png";
const SectionWrapper = {
  // backgroundImage: `linear-gradient(180deg, rgb(24 15 57 / 58%) 0%, rgb(14 9 11 / 79%) 80%), url(${BannerImg.src})`,
  backgroundImage: `linear-gradient(180deg, #180f3917 0%, #0e090b87 80%), url(${BannerImg.src})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center center",
  pt: "50px",
  position: "relative",
  "@media screen and (max-width: 1030px)": {
    backgroundImage: `linear-gradient(180deg, #180f399c 0%, #0e090b9e 80%), url(${BannerImg.src})`,
  },
  "@media screen and (max-width: 600px)": {
    height: "165vh",
  },
  "@media screen and (max-width: 395px)": {
    height: "185vh",
  },
  "@media screen and (max-width: 380px)": {
    height: "235vh",
  },
  "@media screen and (max-width: 365px)": {
    height: "225vh",
  },
  "@media screen and (max-width: 285px)": {
    height: "320vh",
  },
  // "@media screen and (max-height: 645px)": {
  //   height: "260vh",
  // },
  html: { background: "#111", overflow: "hidden" },
  // overflow: "hidden",
  ".dialog": {
    padding: "5px",
    background: "white",
    fontFamily: "monospace",
    width: "fit-content",
    borderRadius: "5px",
    fontSize: "18px",
    position: "absolute",
  },
  ".dialog:after": {
    width: "15px",
    height: "15px",
    background: "white",
    content: "''",
    transform: "rotate(45deg)",
    position: "absolute",
    left: "10px",
    top: "70%",
    zIndex: -1,
  },
  "#sceneOne": { animation: "fadeIn 5s linear forwards" },
  "@keyframes fadeIn": { "0%": { opacity: 0 }, "100%": { opacity: 1 } },
  ".stars": {
    backgroundImage:
      "radial-gradient(2px 2px at 20px 30px, #eee, rgba(0,0,0,0)),\n      radial-gradient(2px 2px at 40px 70px, #fff, rgba(0,0,0,0)),\n      radial-gradient(2px 2px at 50px 160px, #ddd, rgba(0,0,0,0)),\n      radial-gradient(2px 2px at 90px 40px, #fff, rgba(0,0,0,0)),\n      radial-gradient(2px 2px at 130px 80px, #fff, rgba(0,0,0,0)),\n      radial-gradient(2px 2px at 160px 120px, #ddd, rgba(0,0,0,0))",
    backgroundRepeat: "repeat",
    backgroundSize: "200px 200px",
    position: "absolute",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    zIndex: -1,
  },
  "#sceneOne #shipContain": {
    position: "absolute",
    left: "101%",
    top: "80%",
    animation:
      "sceneOne 30s ease-in 5s forwards, outOfTheHole 5s linear 36s forwards",
  },
  ".ourShip": {
    width: "50px",
    height: "15px",
    background: "linear-gradient(to top, gray, #333)",
    borderRadius: "50%",
    position: "absolute",
  },
  ".ourShip:before": {
    content: "''",
    position: "absolute",
    width: "30px",
    height: "10px",
    background: "red",
    top: "8px",
    left: "10px",
    borderRadius: "0 0 10px 10px",
    zIndex: -1,
    animation: "glow 1.5s linear infinite",
  },
  ".ourShip:after": {
    width: "20px",
    height: "25px",
    background: "rgba(0,0,0,.35)",
    border: "1px solid #333",
    position: "absolute",
    borderRadius: "50% 50% 5px 5px",
    content: "''",
    left: "14px",
    top: "-17px",
  },
  "@keyframes glow": {
    "0%": { background: "red", boxShadow: "0 1px 5px red" },
    "50%": { background: "gold", boxShadow: "0 1px 5px gold" },
    "100%": { background: "red", boxShadow: "0 1px 5px red" },
  },
  "@keyframes sceneOne": {
    "0%": { top: "80%", left: "101%", transform: "scale(3)" },
    "25%": { top: "80%", left: "50%", transform: "scale(3)" },
    "100%": { top: "300px", left: "300px", transform: "scale(.1)" },
  },
  "@keyframes outOfTheHole": {
    "0%": { top: "300px", left: "300px", transform: "scale(.1)" },
    "100%": { top: "300px", left: "50%", transform: "scale(1)" },
  },
  "#sceneOne #holeContain": {
    position: "absolute",
    left: "200px",
    top: "200px",
    width: "200px",
    height: "200px",
    animation:
      "spinHole 1.5s linear 34.5s forwards, offHole 3s linear 36s forwards",
    transformOrigin: "center",
  },
  ".blackHole": {
    width: "200px",
    height: "200px",
    background: "black",
    borderRadius: "50%",
    boxShadow: "0 0 25px 5px rgba(0,0,255,.5)",
    position: "absolute",
  },
  "@keyframes spinHole": { "100%": { transform: "rotateY(980deg) scale(0)" } },
  "@keyframes offHole": { "100%": { left: "-100px", opacity: 0 } },
  ".blackHole:before": {
    content: "''",
    width: "1px",
    height: "100px",
    position: "absolute",
    top: "50px",
    left: "87.5px",
    background: "black",
    borderRadius: "50%",
    boxShadow: "0 0 50px 100px Indigo",
    zIndex: -1,
    animation: "rotateHole 17s linear infinite",
  },
  ".blackHole:after": {
    content: "''",
    width: "100px",
    height: "1px",
    position: "absolute",
    top: "50%",
    left: "50px",
    background: "black",
    borderRadius: "50%",
    boxShadow: "0 0 50px 100px cyan",
    opacity: 0.5,
    zIndex: -1,
    animation: "rotateHole2 15s linear infinite",
  },
  "@keyframes rotateHole": {
    "50%": { transform: "rotate(180deg) scale(1.2)" },
    "100%": { transform: "rotate(360deg) scale(1)" },
  },
  "@keyframes rotateHole2": {
    "50%": { transform: "rotate(-180deg) scale(.8)" },
    "100%": { transform: "rotate(-360deg) scale(1)" },
  },
  "#sceneTwo": { display: "none" },
  "#sceneTwo #shipContain": {
    position: "absolute",
    top: "300px",
    left: "50%",
    width: "50px",
    height: "15px",
    animation:
      "whoa 1s linear .5s forwards, moveHigh 1s linear 6s forwards, moveLow 1s linear 8s forwards, broken 1s linear 9.5s infinite, crash 2s linear 16s forwards, dead .1s linear 18s forwards",
    transformOrigin: "center",
  },
  "@keyframes whoa": { "100%": { left: "40%" } },
  "@keyframes moveHigh": {
    "0%": { left: "40%" },
    "100%": { left: "30%", top: "250px" },
  },
  "@keyframes moveLow": {
    "0%": { left: "30%", top: "250px" },
    "100%": { left: "30%", top: "450px" },
  },
  "@keyframes broken": {
    "0%": { left: "30%", top: "450px" },
    "100%": { left: "30%", top: "450px", transform: "rotate(720deg)" },
  },
  "@keyframes crash": {
    "0%": { left: "30%", top: "450px" },
    "100%": { left: "45%", top: "calc(100vh - 30vh)" },
  },
  "@keyframes dead": {
    "0%": { left: "45%", top: "calc(100vh - 30vh)" },
    "100%": {
      left: "45%",
      top: "calc(100vh - 30vh)",
      transform: "rotate(115deg)",
    },
  },
  "#BadshipContain": {
    position: "absolute",
    top: "200px",
    left: "101%",
    transform: "scale(5)",
    animation: "reveal 5s linear .5s forwards, goAway 3s linear 10s forwards",
  },
  "@keyframes reveal": { "100%": { left: "75%" } },
  "@keyframes goAway": {
    "0%": { left: "75%" },
    "100%": { left: "75%", top: "-100px", opacity: 0 },
  },
  ".badShip": {
    width: "50px",
    height: "50px",
    background: "linear-gradient(to top, gray, #333)",
    borderRadius: "50% 5px 5px 50%",
    position: "absolute",
  },
  ".badShip:before": {
    content: "''",
    position: "absolute",
    width: "10px",
    height: "40px",
    background: "red",
    top: "5px",
    left: "45px",
    borderRadius: "50%",
    zIndex: -1,
    animation: "glow 1.5s linear infinite",
  },
  ".badShip:after": {
    width: "20px",
    height: "20px",
    background: "rgba(0,0,0,.35)",
    border: "1px solid #333",
    position: "absolute",
    borderRadius: "100% 3px 3px 3px",
    content: "''",
    left: "4px",
    top: "4px",
  },
  ".laser": {
    width: "1px",
    height: "1px",
    background: "transparent",
    boxShadow: "0 0 3px 1px red",
    position: "absolute",
    top: "25px",
    left: "3px",
    zIndex: -1,
  },
  ".laser:nth-child(2)": { animation: "shoot 1s linear forwards" },
  "@keyframes shoot": {
    "50%": { left: "-100px", width: "100px" },
    "99%": { left: "-100px", width: "0px", opacity: 1 },
    "100%": { left: "-100px", width: "0px", opacity: 0 },
  },
  ".laser:nth-child(3)": { animation: "shoot2 1s linear 6s forwards" },
  "@keyframes shoot2": {
    "50%": { left: "-100px", width: "100px" },
    "99%": { left: "-100px", width: "0px", opacity: 1 },
    "100%": { left: "-100px", width: "0px", opacity: 0 },
  },
  ".laser:nth-child(4)": { animation: "shoot3 1s linear 8s forwards" },
  "@keyframes shoot3": {
    "50%": { left: "-100px", width: "100px", transform: "rotate(15deg)" },
    "99%": {
      left: "-100px",
      top: "0px",
      width: "0px",
      opacity: 1,
      transform: "rotate(15deg)",
    },
    "100%": {
      left: "-100px",
      top: "0px",
      width: "0px",
      opacity: 0,
      transform: "rotate(15deg)",
    },
  },
  ".laser:nth-child(5)": { animation: "shoot4 1s linear 9s forwards" },
  "@keyframes shoot4": {
    "50%": { left: "-100px", width: "100px", transform: "rotate(-15deg)" },
    "99%": {
      left: "-100px",
      top: "50px",
      width: "0px",
      opacity: 1,
      transform: "rotate(-15deg)",
    },
    "100%": {
      left: "-100px",
      top: "50px",
      width: "0px",
      opacity: 0,
      transform: "rotate(-15deg)",
    },
  },
  "#planet": {
    width: "50vw",
    height: "50vw",
    position: "absolute",
    top: "calc(100vh)",
    left: "calc(50vw / 2 )",
    borderRadius: "50%",
    background: "linear-gradient(to bottom, Peru, darkred)",
    animation: "spinMe 10s linear infinite, showMe 5s linear 13s forwards",
    zIndex: -1,
  },
  "@keyframes spinMe": { "100%": { transform: "rotate(360deg)" } },
  "@keyframes showMe": {
    "0%": { top: "calc(100vh)" },
    "100%": { top: "calc(100vh - 35vh)" },
  },

  "#scene": {
    width: "100%",
    margin: "0 auto",
    height: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    position: "relative",
    "@media screen and (min-width: 1800px)": {
      height: "50vh",
    },
    "@media screen and (max-width: 1025px)": {
      height: "55vh",
    },
    "@media screen and (max-width: 810px)": {
      height: "72vh",
    },
    "@media screen and (max-width: 600px)": {
      height: "auto",
      minHeight: "100vh",
    },
  },
  "#scene > div": {
    height: "1px",
    width: "1px",
    borderRadius: "100%",
    position: "absolute",
  },
  "#star1": {
    top: "50%",
    left: "0%",
    animation: "star1 linear 5s forwards infinite",
    animationDelay: "2s",
  },
  "@keyframes star1": { from: { left: "0%" }, to: { left: "99%" } },
  "#star2": {
    top: "0%",
    left: "0%",
    animation: "star2 linear 3s forwards infinite",
    animationDelay: "1s",
  },
  "@keyframes star2": {
    from: { left: "0%", top: "0%" },
    to: { left: "99%", top: "100%" },
  },
  "#star3": {
    top: "0%",
    left: "50%",
    animation: "star3 linear 2s forwards infinite",
    animationDelay: "4s",
  },
  "@keyframes star3": {
    from: { left: "50%", top: "0%" },
    to: { left: "80%", top: "100%" },
  },
  "#star4": {
    top: "100%",
    left: "100%",
    animation: "star4 linear 3s forwards infinite",
    animationDelay: "5s",
  },
  "@keyframes star4": {
    from: { left: "100%", top: "100%" },
    to: { left: "50%", top: "0%" },
  },
  "#star5": {
    top: "100%",
    left: "30%",
    animation: "star5 linear 5s forwards infinite",
    animationDelay: "5.5s",
  },
  "@keyframes star5": {
    from: { left: "30%", top: "100%" },
    to: { left: "50%", top: "0%" },
  },
  "#star6": {
    top: "100%",
    left: "0%",
    animation: "star6 linear 5s forwards infinite",
    animationDelay: "4.5s",
  },
  "@keyframes star6": {
    from: { left: "0%", top: "100%" },
    to: { left: "85%", top: "0%" },
  },
  "#star7": {
    top: "70%",
    left: "0%",
    animation: "star7 linear 4s forwards infinite",
    animationDelay: "3.5s",
  },
  "@keyframes star7": {
    from: { left: "0%", top: "70%" },
    to: { left: "85%", top: "0%" },
  },
  "#star8": {
    top: "0%",
    left: "10%",
    animation: "star8 linear 5.5s forwards infinite",
    animationDelay: "2.5s",
  },
  "@keyframes star8": [
    { from: { left: "10%", top: "0%" }, to: { left: "60%", top: "100%" } },
    { from: { left: "10%", top: "0%" }, to: { left: "60%", top: "100%" } },
  ],
  "#star9": {
    top: "60%",
    left: "100%",
    animation: "star9 linear 4.5s forwards infinite",
    animationDelay: "3s",
  },
  "@keyframes star9": {
    from: { left: "100%", top: "55%" },
    to: { left: "55%", top: "100%" },
  },
  "#star10": {
    top: "100%",
    left: "50%",
    animation: "star10 linear 5s forwards infinite",
    animationDelay: "4s",
  },
  "@keyframes star10": {
    from: { left: "50%", top: "100%" },
    to: { left: "15%", top: "0%" },
  },
  "#star11": {
    top: "30%",
    left: "0%",
    animation: "star11 linear 2s forwards infinite",
    animationDelay: "4s",
  },
  "@keyframes star11": {
    from: { left: "0%", top: "70%" },
    to: { left: "25%", top: "0%" },
  },

  "#welcome": {
    fontFamily: "'Londrina Outline', cursive !important",
    color: "white",
    fontSize: { xs: "100px", sm: "200px" },
    alignSelf: "center",
    width: "100%",
    textAlign: "center",
    justifySelf: "center",
    margin: "0 auto",
  },
};
const SectionSecoundBannerBox = {
  backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) -3.8%, #0000007d 111.9%))`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "top center",
  m: "0 auto",
  width: { xs: "70vw", sm: "62vw" },
  borderRadius: "20px",
  backgroundColor: "#0006",
  // border: "2px solid red",
  // boxShadow: "0px 0px 30px 0px red",
  display: "flex",
  flexDirection: { xs: "column", lg: "row" },
  p: { xs: "41px 20px 36px 20px", md: "41px 40px 36px 45px" },
  "& h2": {
    color: "#fff",
    lineHeight: "26px",
    alignSelf: "center",
    fontFamily: "Vividly !important",
    fontSize: "32px",
    fontWeight: 700,
  },
  "& p": {
    color: "#fff",
    lineHeight: "26px",
    fontFamily: "Vividly !important",
    fontSize: "30px",
    fontWeight: 100,
  },
  "& .BtnWrapper": {
    textAlign: { xs: "center", sm: "right" },
    mt: { xs: "15px", sm: "0" },
    "& button": {
      background:
        "linear-gradient(0deg, rgba(83, 61, 178, 0.102) 0%, rgba(83, 61, 178, 0) 31.8%)",
      backgroundColor: "#ffffff",
      textTransform: "capitalize",
      padding: "6px 32px",
      fontWeight: 700,
      color: "#E08B19",
      borderRadius: "50px",
      border: "3.243px solid #ffffff",
    },
  },
};
const HomeAnimationBanner = () => {
  const sceneOneRef = useRef(null);
  const sceneTwoRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      sceneOneRef.current.style.display = "none";
      sceneTwoRef.current.style.display = "block";
    }, 1000 * 41);

    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return (
    <>
      <Box component={"section"} sx={SectionWrapper}>
        <div ref={sceneOneRef} id="sceneOne">
          {/* <div id="holeContain">
            <div className="blackHole"></div>
          </div> */}
          <div id="shipContain">
            <div className="ourShip"></div>
          </div>
        </div>
        <div ref={sceneTwoRef} id="sceneTwo">
          <div id="shipContain">
            <div className="ourShip"></div>
          </div>
          <div id="BadshipContain"></div>

          {/* <div id="planet"></div> */}
        </div>
        <div id="scene">
          <div
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            {/* <h1 id="welcome">
              GALAXY
              <br />
              PALS
            </h1> */}
            <Box
              sx={{
                textAlign: { xs: "center", md: "left" },
                marginTop: { xs: "40px", lg: "70px" },
                marginBottom: { xs: "50px", md: "80px", lg: "120px" },
                width: { xs: "85vw", sm: "62vw", lg: "440px" },
                alignSelf: "flex-end",
                marginRight: "30px",
                "@media screen and (max-width:1100px)": {
                  ml: "auto",
                  mr: "auto",
                },
                "& img": { width: "235px" },
                "& .InnerBox": {
                  "& h3": {
                    color: "#ffffff",
                    fontSize: "32px",
                    lineHeight: 1,
                    fontWeight: 700,
                    marginTop: "20px",
                    marginBottom: "8px",
                    fontFamily: "Handbag !important",
                    letterSpacing: "3px",
                  },
                  "& p": {
                    color: "#ffffff",
                    fontSize: "18px",
                    lineHeight: 1,
                    marginTop: "12px",
                    marginBottom: "18px",
                    fontFamily: "Handbag !important",
                    letterSpacing: "3px",
                  },
                  "& button": {
                    backgroundColor: "#d5392f",
                    color: "#000000",
                    fontSize: "28px",
                    lineHeight: 1,
                    fontWeight: 800,
                    padding: "22px 49px 8px",
                    borderRadius: "6px",
                    fontFamily: "Handbag !important",
                    letterSpacing: "3px",
                  },
                },
              }}
            >
              <Typography component={"img"} src={Logo.src} alt="" />
              <Box className="InnerBox">
                <Typography component={"h3"}>
                  HI GUYS, WELCOME TO GALAXY PALS a stellar NFT and trading
                  community
                </Typography>
                <Typography component={"P"}>
                  MINT DATE : SOONER THAN YOU THINK
                </Typography>
                <Typography
                  component={"a"}
                  href="https://zealy.io/c/galaxy-0829/invite/oRrAOL-d2v3fI1mHjTNSs"
                  target="_blank"
                >
                  <Button>GET WL</Button>
                </Typography>
              </Box>
            </Box>
            <Box sx={SectionSecoundBannerBox}>
              <Typography component={"h2"} sx={{ textAlign: "center" }}>
                GALAXY PALS
              </Typography>
              <Box>
                <Typography
                  component={"p"}
                  sx={{
                    textAlign: { xs: "justify", md: "center" },
                    color: "white",
                    mb: "10px",
                  }}
                >
                  GALAXY PALS, is a collection of 6,000 unique and randomly
                  generated NFTs aiming to establish a leading community.
                  Positioned on the moon's dark side, we leverage the
                  transformative power of Web 3.0 to create a collaborative
                  trading environment. Members, as NFT holders, play a crucial
                  role in this decentralized initiative, engaging in governance,
                  supporting causes. From engaging giveaways and bonus NFT
                  claims to thrilling airdrops, we ensure your experience with
                  Galaxy Pals is both rewarding and full of surprises.
                </Typography>
                <Typography
                  component={"p"}
                  sx={{
                    textAlign: { xs: "justify", md: "center" },
                    color: "white",
                  }}
                >
                  The name 'GALAXY PALS' perfectly encapsulates our essence,
                  representing not just a collection, but a flourishing
                  community of traders and companions, united and thriving
                  together on the lunar frontier.
                </Typography>
              </Box>
            </Box>
          </div>
          <div id="star1"> </div>
          <div id="star2"> </div>
          <div id="star3"> </div>
          <div id="star4"> </div>
          <div id="star5"> </div>
          <div id="star6"> </div>
          <div id="star7"> </div>
          <div id="star8"> </div>
          <div id="star9"> </div>
          <div id="star10"> </div>
          <div id="star11"> </div>
        </div>
      </Box>
    </>
  );
};

export default HomeAnimationBanner;
