import React from 'react'
import {styles} from "../Styles/Stylesheet.css"
import MuiAppBar from "@mui/material/AppBar"
import {
  Toolbar,
  CssBaseline,
  Typography,
  useTheme,
  useMediaQuery,
  Box
} from "@mui/material";
import { Link } from "react-router-dom";
import trekLogo from "../images/treklogo.png"
import navBarLogo from "../images/navbarimage.png"
import avatar from "../images/avatar.png"
import DrawerComponent from './DrawerComponent';

function Sidebar() {
	const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
	const classes=styles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <MuiAppBar position="fixed" className={classes.appBar}>
          <CssBaseline />
          <Toolbar>
            <img
              src={trekLogo}
              alt="logo"
              className={isMobile ? classes.isMobileLogo : classes.logo}
            />
            {isMobile ? (
              <DrawerComponent />
            ) : (
              <div className={classes.navlinks}>
                <Box sx={{ flexGrow: 0.6, display: "flex" }} />
                <Link to="/" className={classes.link}>
                  <img src={navBarLogo} className={classes.navBarLogo} />
                </Link>
                <Link to="/" className={classes.link}>
                  Newly Added Photos
                </Link>
                <Link to="/about" className={classes.link}>
                  Community

                </Link>
                <Link to="/contact" className={classes.link}>
                  Join Us
                </Link>
                <Link to="/" className={classes.link}>
                  <img src={avatar} className={classes.navBarLogo} />
                </Link>
              </div>
            )}
          </Toolbar>
        </MuiAppBar>
      </Box>
    </div>
  );
}

export default Sidebar