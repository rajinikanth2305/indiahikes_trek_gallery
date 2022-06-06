import React, { useState } from "react";
import MuiDrawer from "@mui/material/Drawer"
import {
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { styles } from "../Styles/Stylesheet.css";
import IconButton from "@mui/material/IconButton";
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from "react-router-dom";
import { FormatColorTextSharp } from "@mui/icons-material";
import clsx from "clsx"
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
        <List>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/" className={classes.link}>
                Home
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Link to="/about" className={classes.link}>
                About
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Link to="/contact" className={classes.link}>
                Contact
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Link to="/about" className={classes.link}>
                Faq
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
