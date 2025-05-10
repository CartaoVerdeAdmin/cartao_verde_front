import { Carousel } from "react-responsive-carousel";
import { StyledImage } from "./Styles";
import {CarouselImage1, CarouselImage2, CarouselImage3 } from "../../../assets/index";

export default function DemoCarousel() {
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={6000}
      infiniteLoop={true}
      dynamicHeight={false}
    >
      <StyledImage src= {CarouselImage1} alt="slide 1" />

      <StyledImage src= {CarouselImage2} alt="slide 2" />

      <StyledImage src= {CarouselImage3} alt="slide 3" />
    </Carousel>
  );
}
