import { makeStyles } from "@mui/styles";

const styles = makeStyles(
  (theme) => ({
    textColor: {
      color: theme.palette.primary.main,
    },
    appBar: { background: "#000", height: 70 },
    navlinks: {
      display: "flex",
      flexGrow: 1,
    },
    logo: {
      cursor: "pointer",
      objectFit: "contain",
      maxHeight: 30,
      marginTop: "5px",
    },
    isMobileLogo: {
      cursor: "pointer",
      objectFit: "contain",
      maxHeight: 30,
      marginTop: "5px",
      flexGrow: 1,
    },
    navBarLogo: {
      cursor: "pointer",
      objectFit: "contain",
      maxHeight: "32.19px",
      maxWidth: "36px",
      marginTop: "5px",
    },
    drawerOpen: {
      width: "80%",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      backgroundColor: "green",
    },
    drawer: {
      width: "100%",
      flexShrink: 0,
      whiteSpace: "nowrap",
    },
    card: {
      transition: "transform 0.15s ease-in-out",
      "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
    },
    communityCard: {
      backgroundColor: "#E3E3E3",
      height: 858.33,
      paddingLeft: 105,
    },
    imageCard: {
      backgroundColor: "#000",
      height: 800,
    },
    menuBackground: {
      backgroundColor: "#ffffff",
    },
    style: {
      backgroundColor: "#3A3636" /* Green */,
      border: "none",
      color: "white",
      padding: "15px 32px",
      textAlign: "center",
      marginRight: "10px",
      textDecoration: "none",
      display: "inline-block",
      fontSize: "32px",
      fontFamily: "Roboto",
      height: 71,
      width: "20%",
      "&.Mui-selected": {
        backgroundColor: "#F6c243",
        border: "none",
        color: "#000000",
        padding: "15px 32px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "32px",
        fontFamily: "Roboto",
      },
    },
    link: {
      textDecoration: "none",
      color: "white",
      fontSize: "20px",
      marginLeft: theme.spacing(5),
      "&:hover": {
        color: "#F6c243",
        borderBottom: "1px solid #F6c243",
      },
    },
  }),
  { index: 1 }
);
export { styles };
