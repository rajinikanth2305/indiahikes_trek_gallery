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
import camera from "../images/camera.png"
import communitySection from "../images/communitySection.png"
import CarouselImage from "../images/CarouselImage.png"
import {images} from "../StaticData/StaticImages"
import Slider from "react-slick";
import Link from "@mui/material/Link";
import {
  useTheme,
  useMediaQuery,
} from "@mui/material";


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
   slidesToShow: 4,
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
	const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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
      <Grid item container xs={12}>
        <Grid item xs={12}>
          <Card sx={{ maxWidth: "100%" }}>
            <Box sx={{ position: "relative" }}>
              <CardMedia
                component="img"
                height={isMobile ? "300" : "621"}
                image={bannerimage}
              />
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
                  <span className={classes.bannerText}>TREK</span>
                  <span
                    className={classes.bannerText}
                    style={{
                      color: "#F6C243",
                    }}
                  >
                    GALLERY
                  </span>
                </Typography>
                <Typography variant="span" className={classes.bannerSubTitle}>
                  Reliving treks through photographs
                </Typography>
              </Box>
            </Box>
          </Card>
        </Grid>
        {!isMobile && (
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
            Present your images in an environment of like-minded people who like
            to engage with you and your creative works! Your photo, the story or
            your thoughts about it and technical details inspire others. Because
            you and your images are a valuable part of our community.
          </Typography>
        )}
        <Grid item container xs={12}>
          <Grid
            item
            container
            xs={12}
            wrap="wrap"
            sx={{
              paddingLeft: { xs: "12px", md: "32px" },
              paddingRight: { xs: "10px", md: "32px" },
            }}
          >
            {isMobile ? (
              <Grid item container xs={12} spacing={2}>
                <Grid item xs={12}>
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
                  </Tabs>
                </Grid>
                <Grid item xs={12}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="wrapped label tabs example"
                  >
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
              </Grid>
            ) : (
              <Grid item xs={12}>
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
            )}
          </Grid>
          <Grid item xs={12} sx={{ marginTop: "20px" }}>
            <TabPanel value={value} index="ALL TREKS">
              <Grid item container xs={12} spacing={isMobile ? 1 : 2}>
                {allTreks.map((trek, index) => (
                  <Grid item xs={6} md={4} lg={4} xl={3}>
                    <Card sx={{ maxWidth: "100%" }} className={classes.card}>
                      <Box sx={{ position: "relative" }}>
                        <CardMedia
                          component="img"
                          sx={{ height: { xs: 98.03, md: 253.81 } }}
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
                            className={classes.tabTextStyle}
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
              <Grid item container xs={12} spacing={isMobile ? 1 : 2}>
                {allTreks.map((trek, index) => (
                  <Grid item xs={6} md={4} lg={4} xl={3}>
                    <Card sx={{ maxWidth: "100%" }} className={classes.card}>
                      <Box sx={{ position: "relative" }}>
                        <CardMedia
                          component="img"
                          sx={{ height: { xs: 98.03, md: 253.81 } }}
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
                            className={classes.tabTextStyle}
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
          <Card sx={{ maxWidth: "100%" }}>
            <CardMedia
              component="img"
              image={communitySection}

            />
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card sx={{ maxWidth: "100%" }} className={classes.communityCard}>
            <Grid item container xs={12} spacing={2}>
              <Grid item xs={12}>
                <h1 className={classes.communityText}>COMMUNITY</h1>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" className={classes.communityPara}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque ante elit, facilisis ut nisi vel, cursus faucibus
                  eros. Aenean facilisis rutrum iaculis. In nec ornare nibh.
                  Pellentesque bibendum dolor fermentum, suscipit ante vel,
                  ultricies elit. Donec feugiat dolor consectetur ligula
                  pulvinar varius. Nunc eu urna ipsum. Donec quis dui at dui
                  tincidunt egestas molestie nec mauris. Vestibulum ex elit,
                </Typography>
              </Grid>
              <Grid item container xs={12} spacing={2}>
                <Grid item xs={12} md={4} lg={4} xl={4} flexDirection="column">
                  <Accordion
                    sx={{
                      backgroundColor: "#4B4B4D",
                      color: "#ffffff",
                      width: { xs: 321, md: 387 },
                      marginLeft: { xs: "25px", md: "0px" },
                      ...(expanded === "panel1" && {
                        color: "#000",
                        backgroundColor: "#F6C243",
                      }),
                    }}
                    expanded={expanded === "panel1"}
                    classes={{ expanded: classes.expanded }}
                    onChange={handleAccordingChange("panel1")}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>1.CONTRIBUTE PHOTOS</Typography>
                    </AccordionSummary>
                    <AccordionDetails
                      sx={{
                        backgroundColor: "#E3E3E3",
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "Roboto",
                          fontSize: 18,
                          marginLeft: { xs: "20px", md: "0px" },
                        }}
                      >
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
                      marginLeft: { xs: "25px", md: "0px" },
                      width: { xs: 321, md: 387 },
                      ...(expanded === "panel2" && {
                        color: "#000",
                        backgroundColor: "#F6C243",
                      }),
                    }}
                    expanded={expanded === "panel2"}
                    classes={{ expanded: classes.expanded }}
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
                      width: { xs: 321, md: 387 },
                      marginLeft: { xs: "25px", md: "0px" },
                      ...(expanded === "panel3" && {
                        color: "#000",
                        backgroundColor: "#F6C243",
                      }),
                    }}
                    expanded={expanded === "panel3"}
                    classes={{ expanded: classes.expanded }}
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
                <Grid item xs={12} md={8} lg={8} xl={8}>
                  <Carousel sx={{ width: { xs: "100%", md: 716 } }}>
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
            <Grid item container xs={12} sx={{ pt: 2, pl: { xs: 0, md: 2 } }}>
              <Grid item xs={12}>
                <Typography
                  variant="h4"
                  sx={{ pl: { xs: 2, md: 0 }, pb: { xs: 2, md: 0 } }}
                >
                  OTHER PHOTOS
                </Typography>
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
        <Grid item xs={12}>
          <Card
            sx={{ maxWidth: "100%" }}
            className={classes.footerCard}
            sx={{
              pt: { xs: "10px", md: 3 },
              pl: { xs: "31px", md: 20 },
              fontSize: { xs: "14px", md: "18px" },
            }}
          >
            <Grid item container xs={12} justifyContent="space-between">
              {isMobile ? (
                <Grid
                  item
                  container
                  xs={12}
                  justifyContent="space-between"
                  flexDirection="column"
                >
                  <Link
                    href="https://indiahikes.com/"
                    variant="string"
                    style={{ fontFamily: "Roboto" }}
                    underline="none"
                  >
                    <span>Visit </span>
                    <span style={{ color: "rgba(255,193,0,1)" }}>
                      Indiahikes{" "}
                    </span>
                    <span>Site</span>
                  </Link>
                  <Link
                    href="/About-us"
                    variant="string"
                    style={{ fontFamily: "Roboto" }}
                    underline="none"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/About-us"
                    variant="string"
                    style={{ fontFamily: "Roboto" }}
                    underline="none"
                  >
                    View Documented Treks
                  </Link>
                  <Link
                    href="https://indiahikes.com/"
                    variant="string"
                    style={{ fontFamily: "Roboto" }}
                    underline="none"
                  >
                    <span>Become a part of our </span>
                    <span style={{ color: "rgba(255,193,0,1)" }}>
                      Community
                    </span>
                  </Link>
                  <Link
                    href="/About-us"
                    variant="string"
                    style={{ fontFamily: "Roboto" }}
                    underline="none"
                  >
                    Contribute Photos
                  </Link>
                  <Link
                    href="/About-us"
                    variant="string"
                    style={{ fontFamily: "Roboto" }}
                    underline="none"
                  >
                    Become a Phototrekker
                  </Link>
                  <Link
                    href="/About-us"
                    variant="string"
                    style={{ fontFamily: "Roboto" }}
                    underline="none"
                  >
                    Photography Competition
                  </Link>
                  <Link
                    href="https://indiahikes.com/"
                    variant="string"
                    style={{ fontFamily: "Roboto" }}
                    underline="none"
                  >
                    <span>Discover </span>
                    <span style={{ color: "rgba(255,193,0,1)" }}>
                      Photography
                    </span>
                  </Link>
                </Grid>
              ) : (
                <Grid item container xs={12} justifyContent="space-between">
                  <Grid item xs={4} container flexDirection="column">
                    <Link
                      href="https://indiahikes.com/"
                      variant="string"
                      style={{ fontFamily: "Roboto" }}
                      underline="none"
                    >
                      <span>Visit </span>
                      <span style={{ color: "rgba(255,193,0,1)" }}>
                        Indiahikes{" "}
                      </span>
                      <span>Site</span>
                    </Link>
                    <Link
                      href="/About-us"
                      variant="string"
                      style={{ fontFamily: "Roboto" }}
                      underline="none"
                    >
                      About Us
                    </Link>
                    <Link
                      href="/About-us"
                      variant="string"
                      style={{ fontFamily: "Roboto" }}
                      underline="none"
                    >
                      View Documented Treks
                    </Link>
                  </Grid>
                  <Grid item xs={4} container flexDirection="column">
                    <Link
                      href="https://indiahikes.com/"
                      variant="string"
                      style={{ fontFamily: "Roboto" }}
                      underline="none"
                    >
                      <span>Become a part of our </span>
                      <span style={{ color: "rgba(255,193,0,1)" }}>
                        Community
                      </span>
                    </Link>
                    <Link
                      href="/About-us"
                      variant="string"
                      style={{ fontFamily: "Roboto" }}
                      underline="none"
                    >
                      Contribute Photos
                    </Link>
                    <Link
                      href="/About-us"
                      variant="string"
                      style={{ fontFamily: "Roboto" }}
                      underline="none"
                    >
                      Become a Phototrekker
                    </Link>
                    <Link
                      href="/About-us"
                      variant="string"
                      style={{ fontFamily: "Roboto" }}
                      underline="none"
                    >
                      Photography Competition
                    </Link>
                  </Grid>
                  <Grid item xs={4} container flexDirection="column">
                    <Link
                      href="https://indiahikes.com/"
                      variant="string"
                      style={{ fontFamily: "Roboto" }}
                      underline="none"
                    >
                      <span>Discover </span>
                      <span style={{ color: "rgba(255,193,0,1)" }}>
                        Photography
                      </span>
                    </Link>
                    <div style={{ display: "flex" }}>
                      <img
                        src={camera}
                        style={{
                          width: "140px",
                          height: "148px",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  </Grid>
                </Grid>
              )}
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
