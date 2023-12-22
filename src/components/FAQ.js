import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import BannerImg from "../images/FaqBgNew.png";
import FAQIcon from "../images/FAQIcon";
import Footer from "./Footer";

const SectionWrapper = {
  // backgroundImage: `linear-gradient(to right, #1b11468a 0%, #0e090bbd 50%), url(${BannerImg.src})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "top center",
  pt: "90px",
  pb: "40px",
  position: "relative",
  marginBottom: "-70px",
  zIndex: 1,
  "@media screen and (min-width:1920px)": {},
  "@media screen and (min-width:2550px)": {
    marginTop: "-95px",
    marginBottom: "-92px",
    backgroundPosition: "bottom center",
  },
  "@media screen and (min-width:2600px)": {
    marginBottom: "-130px",
  },
};
const ContentWrapper = {
  "& h2": {
    fontSize: "40px",
    color: "#fff",
    textShadow: "0.1em 0.1em 0 rgba(79, 49, 19, 0.478)",
    textAlign: { xs: "center", md: "left" },
  },
  "& p": {
    color: "#FFFF00",
    textAlign: { xs: "center", md: "left" },
    mb: { xs: "50px", md: "0" },
  },
};

const AccordionWrapper = {
  "& .AccordianInnerWrapper": {
    backgroundColor: "#ffffff4d",
    padding: "20px 35px 20px",
    borderRadius: "50px !important",

    "&::before": { display: "none" },
    mb: "16px",
    "& .AccordionHeader": {
      pl: "0",
      pr: "0",
      minHeight: "auto !important",
      "& .MuiAccordionSummary-content": {
        mt: "0",
        mb: "0",
        "& p": { color: "#FFFF00", fontWeight: 700, fontSize: "18px" },
      },
      "& .Mui-expanded": { "& svg, svg path": { fill: "#89CFF0" } },
    },
    "& .AccordionBody": {
      "& p": { color: "#00FF00", fontSize: "16px", fontWeight: 500 },
    },
  },
  "& .JoinChannelDescription": {
    color: "#fff",
    textAlign: "right",
    "& span": {
      "& a": { color: "#FFFF00", fontWeight: 700, textDecoration: "none" },
    },
  },
};

const FAQ = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      <Box component={"section"} sx={SectionWrapper} id="FAQ">
        {/* <Container>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} sx={{ mt: "30px" }}>
              <Grid item xs={12} md={6}>
                <Box sx={ContentWrapper}>
                  <Typography component={"h2"}>FAQ</Typography>
                  <Typography component={"p"}>
                 
                    Check out our FAQ section for all the info you need.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={AccordionWrapper}>
                  
                  <Accordion
                    className="AccordianInnerWrapper"
                    defaultExpanded
                    expanded={expanded === "panel1"}
                    onChange={handleChange("panel1")}
                  >
                    <AccordionSummary
                      expandIcon={<FAQIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      className="AccordionHeader"
                    >
                      <Typography>Will we do other NFTs?</Typography>
                    </AccordionSummary>
                    <AccordionDetails className="AccordionBody">
                      <Typography>
                        one or 2 more projects that you will absolutely love
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    className="AccordianInnerWrapper"
                    expanded={expanded === "panel2"}
                    onChange={handleChange("panel2")}
                  >
                    <AccordionSummary
                      expandIcon={<FAQIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      className="AccordionHeader"
                    >
                      <Typography>
                        Should we sell our car and buy your nft?
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails className="AccordionBody">
                      <Typography>
                        No just buy it if you have extra money
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    className="AccordianInnerWrapper"
                    expanded={expanded === "panel3"}
                    onChange={handleChange("panel3")}
                  >
                    <AccordionSummary
                      expandIcon={<FAQIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      className="AccordionHeader"
                    >
                      <Typography>
                        If i buy more will i have to pay more gas
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails className="AccordionBody">
                      <Typography>No you pay that once</Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Typography
                    className="JoinChannelDescription"
                    component={"p"}
                  >
                    Still curious?{" "}
                    <Typography component={"span"}>
                      <Typography
                        component={"a"}
                        href="https://t.me/+nGvqvVz4V4g4ZDdh"
                        target="_blank"
                      >
                        Join our channel and fire away!
                      </Typography>
                    </Typography>
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container> */}
        <Footer />
      </Box>
    </>
  );
};

export default FAQ;
