import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

export const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    width: 387,
    height: 55,
    backgroundColor: "#F6c243",
    border: "1px solid #ced4da",
    fontSize: 18,

    fontStyle: "bold",
    fontFamily: "Open Sans",
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
  },
}));
