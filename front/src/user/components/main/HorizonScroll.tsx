import Carousel from "react-bootstrap/Carousel";
import styled from "styled-components";
import Card from "./Card";
import axios from "axios";
import { useEffect } from "react";

const CarouselWrapper = styled(Carousel)`
  background-color: #e4e4e4;
  height: 300px;
  .carousel-indicators {
    margin: 0;
  }
`;

function HorizonScroll() {
  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(`http://211.188.65.107:8080/api/main/room/last`);
        console.log(response);
      } catch (e) {
        console.log(e);
      }
    }
    getData();
  }, []);

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
