import { Box, Button, Container, Grid, Typography } from "@mui/material";
import checkicon from "../images/greeneicon.svg";
import CloudImgOne from "../images/cloudpartner.png";
import CloudImgTwo from "../images/cloudpartner.png";
import CloudImgThree from "../images/cloudpartner.png";
import NftImg from "../images/BG-Nft.png";

const partnerSection = {
  height: "auto",
  width: "100%",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "bottom center",
  paddingTop: { xs: "10px", sm: "60px" },
  zIndex: "0",
  position: "relative",
  "& .BgImgNft": {
    position: "absolute",
    left: "80px",
    bottom: "200px",
    display: { xs: "none", md: "block" },
    "& img": {
      width: "290px",
      // transform: "scaleX(-1)"
    },
  },
  "& .partnerbg": {
    position: "absolute",
    width: "100%",
    height: "auto",
    top: 0,
    zIndex: -2,
    display: { xs: "none", md: "block" },
    "@media screen and (min-width: 1920px)": { height: "100%" },
  },
  "& .singleactor": {
    position: "absolute",
    width: "400px",
    left: "250px",
    bottom: "290px",
    display: { xs: "none", md: "block" },

    "@media screen and (min-width: 1200px)": {
      left: "120px",
      width: "375px",
      bottom: "90px",
    },
    "@media screen and (min-width: 1280px)": {
      left: "120px",
      width: "375px",
      bottom: "10px",
    },

    "@media screen and (min-width: 1300px)": {
      left: "120px",
      width: "470px",
      bottom: "-15px",
    },

    "@media screen and (min-width: 1366px)": { left: "145px" },
    "@media screen and (min-width: 1400px)": { bottom: "-45px" },
    "@media screen and (min-width: 1440px)": { bottom: "-85px" },
    "@media screen and (min-width: 1500px)": {
      left: "180px",
      bottom: "-143px",
    },
    "@media screen and (min-width: 1536px)": {
      left: "180px",
      bottom: "-180px",
    },
    "@media screen and (min-width: 1600px)": {
      left: "205px",
      bottom: "-246px",
    },
    "@media screen and (min-width: 1700px)": {
      left: "220px",
      bottom: "-345px",
    },
    "@media screen and (min-width: 1800px)": {
      left: "480px",
      bottom: "-246px",
    },
    "@media screen and (min-width: 1920px)": {
      left: "180px",
      width: "670px",
      bottom: "46px",
    },
    "@media screen and (min-width: 2560px)": {
      left: "313px",
    },

    "@media screen and (max-width:768px)": {
      zIndex: "-1",
      width: "350px",
    },
  },
};

const listWrapper = {
  // display: "flex",
  paddingTop: "30px",
  gap: "15px",
  justifyContent: "center",
  "& li": {
    listStyle: "none",
    "& span": {
      pl: "14px",
      fontSize: "12px",
      color: "#111",
      fontWeight: 500,
      fontFamily: "'Baloo 2'",
    },
  },
  "& .listWrapper": {
    "& li": {
      display: "flex",
      mb: "10px",
      "& img": {
        width: "10px",
        height: "100%",
        marginTop: "4px",
      },
    },
  },
  "& h3": {
    fontSize: "30px",
    fontWeight: 600,
    color: "#2e2e0e",
    lineHeight: 1.2,
    marginBottom: "10px",
    fontFamily: "Vividly!important",
  },
  "& p": {
    fontSize: "22px",
    color: "#2e2e0e",
    mb: "10px",
    fontFamily: "Vividly!important",
    lineHeight: "1",
  },
};

const CloudsWrapper = {
  position: "absolute",
  top: "50px",
  left: "0",
  width: "100%",
  height: "425px",
  overflow: "hidden",
  zIndex: "-1",

  "&media screen and (max-width: 1400px) and (min-width: 1200px)": {
    height: "270px",
  },
  "& .clouds": {
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    overflow: "hidden",
    transform: "translateZ(0)",
    "& img": {
      opacity: "0.7",
    },
  },
  "& .cloud": {
    position: "absolute",
    top: "20%",
    width: "300px",
    right: "0",
    opacity: 1,
    WebkitAnimationName: "cloud-movement",
    WebkitAnimationTimingFunction: "linear",
    WebkitAnimationDirection: "forwards",
    WebkitAnimationIterationCount: "infinite",
    WebkitAnimationDuration: "100s",
    MozAnimationName: "cloud-movement",
    MozAnimationTimingFunction: "linear",
    MozAnimationDirection: "forwards",
    MozAnimationIterationCount: "infinite",
    MozAnimationDuration: "100s",
    animationName: "cloud-movement",
    animationTimingFunction: "linear",
    animationDirection: "forwards",
    animationIterationCount: "infinite",
    animationDuration: "100s",
    "&media screen and (max-width: 1400px) and (min-width: 1200px)": {
      top: "0",
    },
  },
  "& .cloud-left": {
    position: "absolute",
    top: "20%",
    width: "300px",
    right: "0",
    opacity: 1,
    WebkitAnimationName: "cloud-movement-left",
    WebkitAnimationTimingFunction: "linear",
    WebkitAnimationDirection: "forwards",
    WebkitAnimationIterationCount: "infinite",
    WebkitAnimationDuration: "100s",
    MozAnimationName: "cloud-movement-left",
    MozAnimationTimingFunction: "linear",
    MozAnimationDirection: "forwards",
    MozAnimationIterationCount: "infinite",
    MozAnimationDuration: "100s",
    animationName: "cloud-movement-left",
    animationTimingFunction: "linear",
    animationDirection: "forwards",
    animationIterationCount: "infinite",
    animationDuration: "100s",
    "&media screen and (max-width: 1400px) and (min-width: 1200px)": {
      top: "0",
    },
  },
  "& .cloud-top": {
    position: "absolute",
    top: "0%",
    width: "300px",
    right: "0",
    opacity: 1,
    WebkitAnimationName: "cloud-movement-left",
    WebkitAnimationTimingFunction: "linear",
    WebkitAnimationDirection: "forwards",
    WebkitAnimationIterationCount: "infinite",
    WebkitAnimationDuration: "100s",
    MozAnimationName: "cloud-movement-left",
    MozAnimationTimingFunction: "linear",
    MozAnimationDirection: "forwards",
    MozAnimationIterationCount: "infinite",
    MozAnimationDuration: "100s",
    animationName: "cloud-movement-left",
    animationTimingFunction: "linear",
    animationDirection: "forwards",
    animationIterationCount: "infinite",
    animationDuration: "100s",
    "&media screen and (max-width: 1400px) and (min-width: 1200px)": {
      top: "0",
    },
  },
  "& .cloud.front, .cloud-left.front, .cloud-top.front": { zIndex: 1 },
  "& .cloud.distant, .cloud-left.distant, .cloud-top.distant": { zIndex: 1 },
  "& .cloud.background, .cloud-left.background, .cloud-top.background": {
    zIndex: 1,
  },
  "& .cloud.smaller, .cloud-left.smaller, .cloud-top.smaller": {
    marginRight: "400px",
    width: "100px",
  },
  "& .cloud.small, .cloud-left.small, .cloud-top.small": {
    marginRight: "200px",
    width: "150px",
  },
  "& .cloud.big, .cloud-left.big, .cloud-top.big": {
    width: "350px",

    marginRight: "150px",
  },
  "& .cloud.massive, .cloud-left.massive, .cloud-top.massive": {
    width: "400px",

    marginRight: "0px",
  },
  "& .slow": {
    WebkitAnimationDuration: "100.2s",
    MozAnimationDuration: "100.2s",
    animationDuration: "100.2s",
  },
  "& .slower": {
    WebkitAnimationDuration: "120.2s",
    MozAnimationDuration: "120.2s",
    animationDuration: "120.2s",
  },
  "& .slowest": {
    WebkitAnimationDuration: "150.5s",
    MozAnimationDuration: "150.5s",
    animationDuration: "150.5s",
  },
  "& .super-slow": {
    WebkitAnimationDuration: "200.5s",
    MozAnimationDuration: "200.5s",
    animationDuration: "200.5s",
  },
};

const TimelineWrapper = {
  "& .timeline ul": { padding: "0" },
  "& .timeline ul li.TimeLineBoxList": {
    background: "#B76229",
    position: "relative",
    margin: "0 auto",
    width: "2px",
    paddingBottom: "40px",
    listStyleType: "none",
    "@media screen and (max-width:820px)": {
      width: "100% !important",
      background: "transparent",
    },
  },
  "& .timeline ul li.TimeLineBoxList:last-child": {
    paddingBottom: "7px",
    background: "#fff",
    width: 0,
    "@media screen and (max-width:820px)": { backgroundColor: "transparent" },
  },
  "& .timeline ul li.TimeLineBoxList:nth-last-of-type(2)": {
    paddingBottom: "0px",
    "@media screen and (max-width:820px)": { paddingBottom: "40px" },
  },

  "& .timeline ul li.TimeLineBoxList .hidden": { opacity: 0 },
  "& .timeline ul li.TimeLineBoxList .content": {
    background: "#ffffffc7",
    position: "relative",
    top: "0px",
    width: "400px",
    padding: "20px",
    transition: "all 0.4s ease-in-out",
    zIndex: 14,
    boxShadow:
      "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
    borderRadius: "30px",
    "@media screen and (min-width:1200px)": {
      width: "350px",
    },
    "& button": {
      position: "absolute",
      right: "-18px",
      top: "-25px",
      backgroundColor: "#FFFF00",
      padding: "10px 60px 5px",
      borderRadius: "50px",
      boxShadow: "0px 4px 4px 0px #00000040",
      color: "#111",
      fontWeight: 700,
      fontFamily: "Vividly!important",
      fontSize: "20px",
      "@media screen and (max-width:820px)": { right: "unset", left: "0" },
    },
  },
  "& .second_content": {
    top: "-100px",
    "@media screen and (max-width:820px)": { top: "0" },
    "& button": {
      left: "-18px",
      width: "max-content",
    },
  },
  "& .third_content": {
    top: "-270px",
    "@media screen and (max-width:820px)": { top: "0" },
  },
  "& .fourth_content": {
    top: "-320px",
    "@media screen and (max-width:820px)": { top: "0" },
    "& button": {
      left: "-18px",
      width: "max-content",
    },
  },
  "& .fifth_content": {
    top: "-322px",
    "@media screen and (max-width:820px)": { top: "0" },
  },
  "& .sixth_content": {
    top: "-457px",
    "@media screen and (max-width:820px)": { top: "0" },
    "& button": {
      left: "-18px",
      width: "max-content",
    },
  },

  "& .timeline ul li.TimeLineBoxList .content p": { textAlign: "left" },
  "& .timeline ul li.TimeLineBoxList .content:before": {
    content: '""',
    background: "#B76229",
    position: "absolute",
    top: "0px",
    width: "38px",
    height: "2px",
    "@media screen and (max-width:820px)": { display: "none" },
  },
  "& .timeline ul li.TimeLineBoxList:nth-of-type(even) .content": {
    left: "50px",
    top: "133px",
    "@media screen and (max-width:820px)": {
      position: "unset",
      width: "calc(100% - 40px)",
    },
  },
  "& .timeline ul li.TimeLineBoxList:nth-of-type(even) .content:before": {
    left: "-50px",
  },
  "& .timeline ul li.TimeLineBoxList:nth-of-type(odd) .content": {
    left: "calc(-433px - 45px)",
    "@media screen and (min-width:1020px)": {
      "&.ContentThird": {
        top: "120px",
      },
    },
    "@media screen and (min-width:1200px)": {
      left: "calc(-383px - 45px)",
    },
    "@media screen and (max-width:820px)": {
      position: "unset",
      width: "calc(100% - 40px)",
    },
  },
  "& .timeline ul li.TimeLineBoxList:nth-of-type(odd) .content:before": {
    right: "-38px",
  },
  "& .timeline-content-info": {
    display: "flex",
    justifyContent: "space-between",
    borderRadius: "4px",
    padding: "2%",
    backgroundColor: "#6497bf",
  },
  "& .content-skills": { margin: "15px 0px 0px 0px" },
  "& .content-skills span": {
    background: "#d8031c",
    borderRadius: "4px",
    padding: "2px",
  },
  "@media screen and (max-width: 1020px)": {
    ".timeline ul li.TimeLineBoxList .content": { width: "41vw" },
    ".timeline ul li.TimeLineBoxList:nth-of-type(even) .content": {
      left: "calc(-41vw - 45px)",
    },
  },
  "@media screen and (max-width: 820px)": {
    ".timeline ul li.TimeLineBoxList": {},
    ".timeline ul li.TimeLineBoxList .content": {
      width: "calc(100vw - 100px)",
    },
    ".timeline ul li.TimeLineBoxList:nth-of-type(even) .content": {
      left: "45px",
    },
    ".timeline ul li.TimeLineBoxList:nth-of-type(even) .content:before": {
      left: "-33px",
    },
  },
};

const Partner = () => {
  return (
    <Box id="Roadmap" component={"section"} sx={partnerSection}>
      <Box className="pawfury_roadmap">
        <Container>
          <Grid container spacing={2} sx={{ justifyContent: "space-around" }}>
            <Grid
              item
              xs={12}
              lg={12}
              sx={{
                paddingLeft: { lg: "0px !important" },
                marginTop: { lg: "50px" },
              }}
            >
              <Typography
                component={"h2"}
                sx={{
                  color: "#fff",
                  textShadow: ".1em .1em 0 rgba(79, 49, 19, 0.478)",
                  fontSize: "60px",
                  textAlign: { xs: "center", lg: "center" },
                  marginBottom: { xs: "65px", sm: "65px", md: "120px" },
                  fontFamily: "Vividly !important",
                  fontWeight: "900",
                }}
              >
                GALAXY PALS ROAD MAP
              </Typography>
            </Grid>
            <Grid item xs={12} lg={12}>
              <Box sx={TimelineWrapper}>
                <div className="timeline">
                  <section className="timeline">
                    <ul>
                      <li className="TimeLineBoxList">
                        <div className="content first_content">
                          <Button sx={{}}>Phase 1</Button>
                          <Box sx={listWrapper}>
                            <Typography component={"h3"}>
                              Presale and Community Building
                            </Typography>
                            <Typography component={"p"}>
                              Exclusive presale access for whitelisted members.
                            </Typography>
                            <Typography component={"p"}>
                              Initiatives to foster community engagement and
                              establish a strong foundation of trust and
                              collaboration.
                            </Typography>
                          </Box>
                        </div>
                      </li>
                      <li className="TimeLineBoxList second_content">
                        <div className="content ">
                          <Button sx={{}}>Phase 2</Button>
                          <Box sx={listWrapper}>
                            <Typography component={"h3"}>
                              Official Launch
                            </Typography>
                            <Typography component={"p"}>
                              Release of the remaining 6,000 GALAXY PALS NFTs
                              for public minting on the Ethereum blockchain
                            </Typography>
                          </Box>
                        </div>
                      </li>
                      <li className="TimeLineBoxList third_content">
                        <div className="content ContentThird">
                          <Button sx={{}}>Phase 3</Button>
                          <Box sx={listWrapper}>
                            <Typography component={"h3"}>
                              Metaverse Collaboration and Trading Mastery
                            </Typography>
                            <Typography component={"p"}>
                              Partnership with Aiden Metaverse and other
                              prominent projects to host team gatherings, where
                              we disclose market insights, strategize on
                              trading, and collaboratively work on side quests.
                            </Typography>
                            <Typography component={"p"}>
                              Enhancement of our trading tools and resources,
                              ensuring our community has the best possible
                              advantages in the market.
                            </Typography>
                          </Box>
                        </div>
                      </li>
                      <li className="TimeLineBoxList fourth_content">
                        <div className="content ">
                          <Button sx={{}}>Phase 4</Button>
                          <Box sx={listWrapper}>
                            <Typography component={"h3"}>
                              GALAXY PALS Auctions and Community Events
                            </Typography>
                            <Typography component={"p"}>
                              Conduct legendary GALAXY PALS auctions and
                              collaborative events, with a portion of the
                              proceeds supporting community initiatives and
                              causes.
                            </Typography>
                            <Typography component={"p"}>
                              Engage the community in decision-making processes,
                              ensuring a democratic and inclusive environment.
                            </Typography>
                          </Box>
                        </div>
                      </li>
                      <li className="TimeLineBoxList fifth_content">
                        <div className="content ">
                          <Button sx={{}}>Phase 5</Button>
                          <Box sx={listWrapper}>
                            {/* <Typography component={"h3"}>
                              Sustainability and Community Governance
                            </Typography> */}
                            <Typography component={"p"}>
                              Exploration of potential opportunities in creating
                              a play-to-earn game or launching a meme coin,
                              further expanding our community's engagement and
                              impact.
                            </Typography>
                          </Box>
                        </div>
                      </li>
                      <li className="TimeLineBoxList sixth_content">
                        <div className="content ">
                          <Button sx={{}}>Phase 6</Button>
                          <Box sx={listWrapper}>
                            <Typography component={"h3"}>Airdrops</Typography>
                            <Typography component={"p"}>
                              We will give away nfts, and ethereum, and have
                              engagement competitions
                            </Typography>
                          </Box>
                        </div>
                      </li>
                    </ul>
                  </section>
                </div>
              </Box>
            </Grid>
          </Grid>
          <Box sx={CloudsWrapper}>
            <div className="clouds">
              <Typography
                component={"img"}
                src={CloudImgOne.src}
                className="cloud big front slowest"
              />
              <Typography
                component={"img"}
                src={CloudImgTwo.src}
                className="cloud distant smaller"
              />
              <Typography
                component={"img"}
                src={CloudImgThree.src}
                className="cloud small slow"
              />
              <Typography
                component={"img"}
                src={CloudImgOne.src}
                className="cloud distant super-slow massive"
              />
              <Typography
                component={"img"}
                src={CloudImgOne.src}
                className="cloud slower"
              />
              <Typography
                component={"img"}
                src={CloudImgOne.src}
                className="cloud big front slowest"
              />
              <Typography
                component={"img"}
                src={CloudImgTwo.src}
                className="cloud-left distant smaller"
              />
              <Typography
                component={"img"}
                src={CloudImgThree.src}
                className="cloud-left small slow"
              />
              <Typography
                component={"img"}
                src={CloudImgOne.src}
                className="cloud-left distant super-slow massive"
              />
              <Typography
                component={"img"}
                src={CloudImgOne.src}
                className="cloud-left slower"
              />

              <Typography
                component={"img"}
                src={CloudImgTwo.src}
                className="cloud-top distant smaller"
              />
              <Typography
                component={"img"}
                src={CloudImgThree.src}
                className="cloud-top small slow"
              />
              <Typography
                component={"img"}
                src={CloudImgOne.src}
                className="cloud-top distant super-slow massive"
              />
              <Typography
                component={"img"}
                src={CloudImgOne.src}
                className="cloud-top slower"
              />
            </div>
          </Box>
        </Container>
      </Box>
      <Box className="BgImgNft">
        <Typography component={"img"} src={NftImg.src} alt="" />
      </Box>
    </Box>
  );
};

export default Partner;

// Twinkling Night Sky by Sharna
