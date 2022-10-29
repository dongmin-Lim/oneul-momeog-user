import Carousel from "react-bootstrap/Carousel";
import styled from "styled-components";
import Card from "./Card";

const CarouselWrapper = styled(Carousel)`
  background-color: #e4e4e4;
  height: 300px;
  .carousel-indicators {
    margin: 0;
  }
`;

function HorizonScroll() {
  return (
    <CarouselWrapper variant="dark">
      <Carousel.Item>
        <Card />
        <Card />
        <Card />
      </Carousel.Item>

      <Carousel.Item>
        <Card />
        <Card />
        <Card />
      </Carousel.Item>

      <Carousel.Item>
        <Card />
        <Card />
        <Card />
      </Carousel.Item>

      <Carousel.Item>
        <Card />
        <Card />
        <Card />
      </Carousel.Item>
    </CarouselWrapper>
  );
}
export default HorizonScroll;
