import { Paper,Card,CardMedia,Box } from "@mui/material";
import CarouselImage from "./images/CarouselImage.png"
function CarouselItem(props) {
  return (
    <Paper >
      <Card sx={{ maxWidth: "100%", backgroundColor: "#E3E3E3" }}>
        <Box sx={{ position: "relative" }}>
          <CardMedia component="img" height="390" image={props.item.image} />
        </Box>
      </Card>
    </Paper>
  );
}
export default CarouselItem;
