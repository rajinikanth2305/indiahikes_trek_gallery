import { createTheme } from "@mui/material/styles";
const darkTheme = createTheme({
  palette: {
    background: {
      default: "#000",
      paper: "#000",
    },
    primary: {
      main: "#fff",
    },
	text:{
		primary:"#ffffff"
	}
  },
});
export {darkTheme}