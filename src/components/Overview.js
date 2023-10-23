import { Box, Button, Container, Grid, Typography } from "@mui/material";
import NftImg from "../images/alien.png";
const SectionWrapper = {
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "top center",
  position: "relative",
  display: "flex",
  alignItems: "center",
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

const Overview = () => {
  return (
    <>
      <Box component={"section"} sx={SectionWrapper}>
        <Box
          className="BackShap"
          sx={{ display: { xs: "none", md: "block" } }}
        ></Box>
        <Container sx={{ zIndex: "1" }}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} sx={{ mt: "0" }}>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    width: { xs: "100%", sm: "84%" },
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    "& h3": {
                      color: "#FFFF00",
                      fontWeight: 700,
                      fontSize: "30px",
                      borderBottom: "2px solid #fff",
                      marginBottom: "20px",
                      position: "relative",
                      width: "100%",
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
                      color: "#00FF00",
                      fontWeight: 500,
                      fontSize: "16px",
                      marginBottom: "20px",
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
                  <Typography component={"h3"}>OVERVIEW</Typography>
                  <Typography component={"h6"}>
                    Earning Token Rewards & Carbon Credits
                  </Typography>
                  <Typography component={"p"}>
                    Smash through the game, obliterate enemies, and rack up
                    Token Rewards and Carbon Credits. The more you play, the
                    more you earn - and the higher you climb on the leaderboard!
                  </Typography>
                  <Typography component={"h6"}>
                    Making a Real Difference: Our Commitment to the Environment
                  </Typography>
                  <Typography component={"p"}>
                    We're not just talking green, we're acting on it! A portion
                    of our revenue from NFT sales goes towards funding
                    environmental initiatives around the world. Game on for a
                    better future!
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
                      width: "50%",

                      position: "relative",
                      zIndex: 5,
                      animation: "average-game-animation 1.5s ease-out",
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

export default Overview;
