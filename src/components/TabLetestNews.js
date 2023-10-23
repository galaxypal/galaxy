import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import MissionAndVision from "./MissionAndVision";
import Overview from "./Overview";
import HowItWorks from "./HowItWorks";

const sectionWrapper = {
  position: "relative",
  pt: { xs: "230px", sm: "120px", md: "100px" },
  pb: { xs: "50px", sm: "150px" },
  "@media screen and (min-width: 1915px)": {
    pt: "335px",
    pb: "210px",
  },
  "@media screen and (min-width: 2560px)": {
    pt: "260px",
    pb: "210px",
  },
  "#scene": {
    width: "100%",
    margin: "0 auto",
    height: "100vh",

    // backgroundImage:
    //   'url("https://res.cloudinary.com/dylant25/image/upload/v1563056818/stars.jpg")',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    position: "relative",
  },
  "#scene > div": {
    height: "1px",
    width: "1px",
    // border: "1px solid white",
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
    fontSize: "200px",
    alignSelf: "center",
    width: "100%",
    textAlign: "center",
    justifySelf: "center",
    margin: "0 auto",
    position: "absolute",
  },
};

const TabBtnWrapper = {
  "& .MuiTabs-flexContainer": {
    flexDirection: { xs: "row", md: "column" },
    "@media screen and (max-width:768px)": {
      justifyContent: "center",
    },
    "@media screen and (max-width:600px)": {
      flexWrap: "wrap",
    },
  },
  "& .MuiTabs-indicator": { display: "none" },
  "& .MuiTabs-scroller": {
    "& button": {
      transition: "1s all",
      color: "#fff",
      background: "#00000059",
      marginBottom: "10px",
      ml: "auto",
      borderTopLeftRadius: "100px",
      borderBottomLeftRadius: "100px",
      width: "200px",
      background: "linear-gradient(90deg, #d992552b 0%, #a926262b 100%)",
      "@media screen and (max-width:768px)": {
        borderTopRightRadius: "100px",
        borderBottomRightRadius: "100px",
        m: "0 20px",
      },
      "@media screen and (max-width:600px)": {
        width: "140px",
        borderRadius: "100px",
        mt: "20px",
      },
    },
  },
  "& button.Mui-selected": {
    background: "linear-gradient(90deg, #d99255 0%, #a92626 100%)",
    width: "250px",
    borderTopLeftRadius: "100px",
    borderBottomLeftRadius: "100px",
    "@media screen and (max-width:768px)": {
      bordrTopRightRadius: "100px",
      borderBottomRightRadius: "100px",
      width: "200px",
    },
    "@media screen and (max-width:600px)": {
      width: "140px",
      borderRadius: "100px",
    },
    "&:before": {
      content: "''",
      width: "0",
      height: "0",
      borderBottom: "10px solid #ffffff",
      borderLeft: "10px solid transparent",
      position: "absolute",
      right: "19px",
      bottom: "10%",
      transform: "translateY(-50%)",
    },
  },
};
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`mission-tabpanel-${index}`}
      aria-labelledby={`mission-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `mission-tab-${index}`,
    "aria-controls": `mission-tabpanel-${index}`,
  };
}

const TabLetestNews = ({ value, setValue }) => {
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box id="About" component={"section"} sx={sectionWrapper}>
        <TabPanel value={value} index={0}>
          <MissionAndVision handleChange={handleChange} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Overview handleChange={handleChange} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <HowItWorks />
        </TabPanel>
        <Box
          sx={{
            position: "absolute",
            right: "0",
            top: { xs: "6%", sm: "3%", md: "25%" },
            zIndex: "999",
            "@media screen and (max-width:768px)": {
              width: "100%",
            },
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={TabBtnWrapper}
          >
            <Tab label="Our Mission" {...a11yProps(0)} />
            <Tab label="Overview" {...a11yProps(1)} />
            <Tab label="How It Works" {...a11yProps(2)} />
          </Tabs>
        </Box>
      </Box>
    </>
  );
};

export default TabLetestNews;
