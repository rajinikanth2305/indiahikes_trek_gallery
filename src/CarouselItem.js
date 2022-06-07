import { Paper,Card,CardMedia,Box } from "@mui/material";
import CarouselImage from "./images/CarouselImage.png"
import { useTheme, useMediaQuery } from "@mui/material";
function CarouselItem(props) {
	const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Paper >
      <Card sx={{ maxWidth: "100%", backgroundColor: "#E3E3E3" }}>
        <Box sx={{ position: "relative" }}>
          <CardMedia component="img" height={isMobile ? "204" : "390"} image={props.item.image} />
        </Box>
      </Card>
    </Paper>
  );
}
export default CarouselItem;
