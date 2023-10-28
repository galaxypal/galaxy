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
  backgroundImage: `linear-gradient(to right, #1b11468a 0%, #0e090bbd 50%), url(${BannerImg.src})`,
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
    "& span": { color: "#FFFF00", fontWeight: 700 },
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
                    Got questions? Weve got answers.
                    <br /> Check out our FAQ section for all the info you need.
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
                      <Typography>What is Lorem Ipsum?</Typography>
                    </AccordionSummary>
                    <AccordionDetails className="AccordionBody">
                      <Typography>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industrys
                        standard dummy text ever since the 1500s, when an
                        unknown printer took a galley of type and scrambled it
                        to make a type specimen book. It has survived not only
                        five centuries, but also the leap into electronic
                        typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset
                        sheets containing Lorem Ipsum passages, and more
                        recently with desktop publishing software like Aldus
                        PageMaker including versions of Lorem Ipsum.
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
                      <Typography>What is Lorem Ipsum?</Typography>
                    </AccordionSummary>
                    <AccordionDetails className="AccordionBody">
                      <Typography>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industrys
                        standard dummy text ever since the 1500s, when an
                        unknown printer took a galley of type and scrambled it
                        to make a type specimen book. It has survived not only
                        five centuries, but also the leap into electronic
                        typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset
                        sheets containing Lorem Ipsum passages, and more
                        recently with desktop publishing software like Aldus
                        PageMaker including versions of Lorem Ipsum.
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
                      <Typography>What is Lorem Ipsum?</Typography>
                    </AccordionSummary>
                    <AccordionDetails className="AccordionBody">
                      <Typography>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industrys
                        standard dummy text ever since the 1500s, when an
                        unknown printer took a galley of type and scrambled it
                        to make a type specimen book. It has survived not only
                        five centuries, but also the leap into electronic
                        typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset
                        sheets containing Lorem Ipsum passages, and more
                        recently with desktop publishing software like Aldus
                        PageMaker including versions of Lorem Ipsum.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    className="AccordianInnerWrapper"
                    expanded={expanded === "panel4"}
                    onChange={handleChange("panel4")}
                  >
                    <AccordionSummary
                      expandIcon={<FAQIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      className="AccordionHeader"
                    >
                      <Typography>What is Lorem Ipsum?</Typography>
                    </AccordionSummary>
                    <AccordionDetails className="AccordionBody">
                      <Typography>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industrys
                        standard dummy text ever since the 1500s, when an
                        unknown printer took a galley of type and scrambled it
                        to make a type specimen book. It has survived not only
                        five centuries, but also the leap into electronic
                        typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset
                        sheets containing Lorem Ipsum passages, and more
                        recently with desktop publishing software like Aldus
                        PageMaker including versions of Lorem Ipsum.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    className="AccordianInnerWrapper"
                    expanded={expanded === "panel5"}
                    onChange={handleChange("panel5")}
                  >
                    <AccordionSummary
                      expandIcon={<FAQIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      className="AccordionHeader"
                    >
                      <Typography>What is Lorem Ipsum?</Typography>
                    </AccordionSummary>
                    <AccordionDetails className="AccordionBody">
                      <Typography>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industrys
                        standard dummy text ever since the 1500s, when an
                        unknown printer took a galley of type and scrambled it
                        to make a type specimen book. It has survived not only
                        five centuries, but also the leap into electronic
                        typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset
                        sheets containing Lorem Ipsum passages, and more
                        recently with desktop publishing software like Aldus
                        PageMaker including versions of Lorem Ipsum.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    className="AccordianInnerWrapper"
                    expanded={expanded === "panel6"}
                    onChange={handleChange("panel6")}
                  >
                    <AccordionSummary
                      expandIcon={<FAQIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      className="AccordionHeader"
                    >
                      <Typography>What is Lorem Ipsum?</Typography>
                    </AccordionSummary>
                    <AccordionDetails className="AccordionBody">
                      <Typography>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industrys
                        standard dummy text ever since the 1500s, when an
                        unknown printer took a galley of type and scrambled it
                        to make a type specimen book. It has survived not only
                        five centuries, but also the leap into electronic
                        typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset
                        sheets containing Lorem Ipsum passages, and more
                        recently with desktop publishing software like Aldus
                        PageMaker including versions of Lorem Ipsum.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Typography
                    className="JoinChannelDescription"
                    component={"p"}
                  >
                    Still curious?{" "}
                    <Typography component={"span"}>
                      Join our channel and fire away!
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
