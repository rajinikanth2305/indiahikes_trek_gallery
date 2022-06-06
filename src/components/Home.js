import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Carousel from "react-material-ui-carousel";
import { Paper} from "@mui/material";
import Typography from "@mui/material/Typography";
import { Box, Tabs, Tab,IconButton } from "@mui/material";
import bannerimage from "../images/bannerimage.png";
import { styles } from "../Styles/Stylesheet.css";
import TabPanel from "./TabPanel";
import { allTreks } from "../StaticData/TreksData";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CarouselItem from "../CarouselItem"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AliBedni from "../images/AliBedni.png";
import BaliPass from "../images/BaliPass.png";
import BeasKund from "../images/BeasKund.png";
import CarouselImage from "../images/CarouselImage.png"
import DayaraBugyal from "../images/DayaraBugyal.png";
import Gaumukh from "../images/Gaumukh.png";
import Goechala from "../images/Goechala.png";
import {images} from "../StaticData/StaticImages"
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function a11yProps(index) {
  return {
    id: `wrapped-tab-${index}`,
    "aria-controls": `wrapped-tabpanel-${index}`,
  };
}
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

 const settings = {
   dots: true,
   focusOnSelect: true,
   slidesToShow: 3,
   slidesToScroll: 1,
   infinite: true,
   autoplay:true,
   arrows:false,
   responsive: [
     {
       breakpoint: 1024,
       settings: {
         slidesToShow: 3,
         slidesToScroll: 3,
         infinite: true,
         dots: true,
       },
     },
     {
       breakpoint: 600,
       settings: {
         slidesToShow: 2,
         slidesToScroll: 2,
         initialSlide: 2,
       },
     },
     {
       breakpoint: 480,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1,
       },
     },
   ],
 };
function Home() {
  const classes = styles();
  const [value, setValue] = React.useState("ALL TREKS");
  const [age, setAge] = React.useState("CONTRIBUTE PHOTOS");
    const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      image: CarouselImage,
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      image: CarouselImage,
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      image: CarouselImage,
    },
  ];
  const handleAccordingChange =(panel) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <>
      <Grid item container xs={12} spacing={2}>
        <Grid item xs={12}>
          <Card sx={{ maxWidth: "100%" }}>
            <Box sx={{ position: "relative" }}>
              <CardMedia component="img" height="621" image={bannerimage} />
              <Box
                sx={{
                  position: "absolute",
                  bottom: 10,
                  left: 0,
                  textAlign: "center",
                  width: "100%",
                  color: "white",
                  padding: "10px",
                }}
              >
                <Typography variant="h5">
                  <span
                    style={{
                      color: "#ffffff",
                      marginRight: "10px",
                      fontFamily: "Roboto",
                      fontSize: 96,
                      fontStyle: "bold",
                    }}
                  >
                    TREK
                  </span>
                  <span
                    style={{
                      color: "#F6C243",
                      fontFamily: "Roboto",
                      fontSize: 96,
                      fontStyle: "bold",
                    }}
                  >
                    GALLERY
                  </span>
                </Typography>
                <Typography
                  variant="span"
                  style={{
                    color: "#ffffff",
                    fontFamily: "Roboto",
                    fontSize: 36,
                    fontStyle: "bold",
                  }}
                >
                  Reliving treks through photographs
                </Typography>
              </Box>
            </Box>
          </Card>
        </Grid>
        <Typography
          variant="body2"
          style={{
            color: "#ffffff",
            textAlign: "center",
            marginLeft: "205px",
            fontFamily: "Open Sans",
            fontSize: "16px",
            width: "1025px",
            height: "85px",
            lineHeight: "28.1px",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          ante elit, facilisis ut nisi vel, cursus faucibus eros. Aenean
          facilisis rutrum iaculis. In nec ornare nibh. Pellentesque bibendum
          dolor fermentum, suscipit ante vel, ultricies elit. Donec feugiat
          dolor consectetur ligula pulvinar varius. Nunc eu urna ipsum. Donec
          quis dui at dui tincidunt egestas molestie nec mauris. Vestibulum ex
          elit,
        </Typography>
        <Grid item container xs={12}>
          <Grid
            item
            xs={12}
            sx={{ paddingLeft: "32px", paddingRight: "32px", overflow: "auto" }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="wrapped label tabs example"
            >
              <Tab
                value="ALL TREKS"
                label="ALL TREKS"
                wrapped
                {...a11yProps("ALL TREKS")}
                className={classes.style}
              />
              <Tab
                value="WINTER"
                label="WINTER"
                {...a11yProps("WINTER")}
                className={classes.style}
              />
              <Tab
                value="SUMMER"
                label="SUMMER"
                {...a11yProps("SUMMER")}
                className={classes.style}
              />
              <Tab
                value="MONSOON"
                label="MONSOON"
                {...a11yProps("MONSOON")}
                className={classes.style}
              />
              <Tab
                value="AUTUMN"
                label="AUTUMN"
                {...a11yProps("AUTUM")}
                className={classes.style}
              />
            </Tabs>
          </Grid>
          <Grid item xs={12} sx={{ marginTop: "20px" }}>
            <TabPanel value={value} index="ALL TREKS">
              <Grid item container xs={12} spacing={2}>
                {allTreks.map((trek, index) => (
                  <Grid item xs={4} xl={3}>
                    <Card sx={{ maxWidth: "100%" }} className={classes.card}>
                      <Box sx={{ position: "relative" }}>
                        <CardMedia
                          component="img"
                          height="253.81"
                          image={trek.image}
                        />
                        <Box
                          sx={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            width: "100%",
                            paddingLeft: "10px",
                            paddingBottom: "10px",
                          }}
                        >
                          <Typography
                            variant="h1"
                            style={{
                              color: "#FFFFFF",
                              marginRight: "10px",
                              fontFamily: "Roboto",
                              fontSize: 24,
                              textShadow: "1px 0px #ffffff",
                              fontStyle: "bold",
                            }}
                          >
                            {trek.trekName}
                          </Typography>
                        </Box>
                      </Box>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </TabPanel>
            <TabPanel value={value} index="WINTER">
              <Grid item container xs={12} spacing={2}>
                {allTreks.map((trek, index) => (
                  <Grid item xs={4} xl={3}>
                    <Card sx={{ maxWidth: "100%" }} className={classes.card}>
                      <Box sx={{ position: "relative" }}>
                        <CardMedia
                          component="img"
                          height="253.81"
                          image={trek.image}
                        />
                        <Box
                          sx={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            width: "100%",
                            paddingLeft: "10px",
                            paddingBottom: "10px",
                          }}
                        >
                          <Typography
                            variant="h1"
                            style={{
                              color: "#FFFFFF",
                              marginRight: "10px",
                              fontFamily: "Roboto",
                              fontSize: 24,
                              textShadow: "1px 0px #ffffff",
                              fontStyle: "bold",
                            }}
                          >
                            {trek.trekName}
                          </Typography>
                        </Box>
                      </Box>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </TabPanel>
            <TabPanel value={value} index="SUMMER">
              Item Three
            </TabPanel>
            <TabPanel value={value} index="MONSOON">
              Item Four
            </TabPanel>
            <TabPanel value={value} index="AUTUMN">
              Item Five
            </TabPanel>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Card sx={{ maxWidth: "100%" }} className={classes.communityCard}>
            <Grid item container xs={12}>
              <Grid item xs={12}>
                <h1
                  style={{
                    fontFamily: "Roboto",
                    fontSize: 48,
                    color: "#000000",
                    fontStyle: "bold",
                  }}
                >
                  COMMUNITY
                </h1>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="body1"
                  style={{
                    fontFamily: "Open Sans",
                    fontSize: 18,
                    width: "1012px",
                    height: "151px",
                    color: "#000000",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque ante elit, facilisis ut nisi vel, cursus faucibus
                  eros. Aenean facilisis rutrum iaculis. In nec ornare nibh.
                  Pellentesque bibendum dolor fermentum, suscipit ante vel,
                  ultricies elit. Donec feugiat dolor consectetur ligula
                  pulvinar varius. Nunc eu urna ipsum. Donec quis dui at dui
                  tincidunt egestas molestie nec mauris. Vestibulum ex elit,
                </Typography>
              </Grid>
              <Grid item container xs={12}>
                <Grid item xs={4} flexDirection="column">
                  <Accordion
                    sx={{
                      backgroundColor: "#4B4B4D",
                      color: "#ffffff",
                      width: 387,
                      ...(expanded === "panel1" && {
                        color: "#000",
                        backgroundColor: "#F6C243",
                      }),
                    }}
                    expanded={expanded === "panel1"}
                    onChange={handleAccordingChange("panel1")}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>1.CONTRIBUTE PHOTOS</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ backgroundColor: "#E3E3E3" }}>
                      <Typography sx={{ fontFamily: "Roboto", fontSize: 18 }}>
                        We'd love to see where you have been exploring. If you
                        have lots of photos you would like to share you can send
                        us a couple of samples and we’ll consider featuring your
                        photo gallery on the website.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    sx={{
                      backgroundColor: "#4B4B4D",
                      marginTop: "10px",
                      color: "#ffffff",
                      width: 387,
                      ...(expanded === "panel2" && {
                        color: "#000",
                        backgroundColor: "#F6C243",
                      }),
                    }}
                    expanded={expanded === "panel2"}
                    onChange={handleAccordingChange("panel2")}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography>2.BECOME A PHOTOTREKKER</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ backgroundColor: "#E3E3E3" }}>
                      <Typography sx={{ fontFamily: "Roboto", fontSize: 18 }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    sx={{
                      backgroundColor: "#4B4B4D",
                      marginTop: "10px",
                      color: "#ffffff",
                      width: 387,
                      ...(expanded === "panel3" && {
                        color: "#000",
                        backgroundColor: "#F6C243",
                      }),
                    }}
                    expanded={expanded === "panel3"}
                    onChange={handleAccordingChange("panel3")}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography>3.PHOTOGRAPHY COMPETITION</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ backgroundColor: "#E3E3E3" }}>
                      <Typography sx={{ fontFamily: "Roboto", fontSize: 18 }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </Grid>
                <Grid item xs={8}>
                  <Carousel sx={{ width: 716 }}>
                    {items.map((item, i) => (
                      <CarouselItem key={i} item={item} />
                    ))}
                  </Carousel>
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card sx={{ maxWidth: "100%" }} className={classes.imageCard}>
            <Grid item container xs={12} sx={{ pt: 2 ,pl:2}}>
              <Grid item xs={12}>
                <Typography variant="h4">OTHER PHOTOS</Typography>
              </Grid>
              <Grid item xs={12}>
                <Slider {...settings}>
                  {images.map((card, index) => (
                    <div
                      key={index}
                      style={{ marginRight: "20px", position: "relative" }}
                    >
                      <img src={card.imgPath} />
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          width: "100%",
                          paddingLeft: "10px",
                          paddingBottom: "10px",
                        }}
                      >
                        <Typography
                          variant="h1"
                          style={{
                            color: "#FFFFFF",
                            marginRight: "10px",
                            fontFamily: "Roboto",
                            fontSize: 24,
                            textShadow: "1px 0px #ffffff",
                            fontStyle: "bold",
                          }}
                        >
                          {card.label}
                        </Typography>
                      </Box>
                    </div>
                  ))}
                </Slider>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
