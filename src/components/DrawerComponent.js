import React, { useState } from "react";
import MuiDrawer from "@mui/material/Drawer";
import { List, ListItem, ListItemText } from "@mui/material";
import { styles } from "../Styles/Stylesheet.css";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { FormatColorTextSharp } from "@mui/icons-material";
import navBarLogo from "../images/navbarimage.png";
import avatar from "../images/avatar.png";
import CloseIcon from "@mui/icons-material/Close";
import clsx from "clsx";
function DrawerComponent() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const classes = styles();

  return (
    <>
      <MuiDrawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: openDrawer,
            [classes.drawerClose]: !openDrawer,
          }),
        }}
      >
        <div style={{ width: "100%", position: "relative" }}>
          <div style={{ position: "absolute", top:2,right: "10px" }}>
            <IconButton onClick={() => setOpenDrawer(false)}>
              <CloseIcon style={{ color: "#ffffff" }} />
            </IconButton>
          </div>
        </div>
        <List>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/" className={classes.link}>
                <img src={navBarLogo} className={classes.navBarLogo} />
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/" className={classes.link}>
                Newly Added Photos
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/about" className={classes.link}>
                Community
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/" className={classes.link}>
                <img src={avatar} className={classes.navBarLogo} />
              </Link>
            </ListItemText>
          </ListItem>
        </List>
      </MuiDrawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        style={{ color: "#fff" }}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
}
export default DrawerComponent;
