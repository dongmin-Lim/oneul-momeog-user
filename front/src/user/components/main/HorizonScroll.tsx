import styled from "styled-components";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import Card from "./Card";
import axios from "axios";
import { useEffect } from "react";

const CarouselWrapper = styled(Carousel)`
  background-color: rgb(230, 230, 230);
  height: 250px;
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
        <Container>
          <Row className="justify-content-md-center">
            <Col>
              <Card />
            </Col>
            <Col>
              <Card />
            </Col>
            <Col>
              <Card />
            </Col>
          </Row>
        </Container>
      </Carousel.Item>

      <Carousel.Item>
        <Container>
          <Row className="justify-content-md-center">
            <Col>
              <Card />
            </Col>
            <Col>
              <Card />
            </Col>
            <Col>
              <Card />
            </Col>
          </Row>
        </Container>
      </Carousel.Item>

      <Carousel.Item>
        <Container>
          <Row className="justify-content-md-center">
            <Col>
              <Card />
            </Col>
            <Col>
              <Card />
            </Col>
            <Col>
              <Card />
            </Col>
          </Row>
        </Container>
      </Carousel.Item>

      <Carousel.Item>
        <Container>
          <Row className="justify-content-md-center">
            <Col>
              <Card />
            </Col>
            <Col>
              <Card />
            </Col>
            <Col>
              <Card />
            </Col>
          </Row>
        </Container>
      </Carousel.Item>
    </CarouselWrapper>
  );
}
export default HorizonScroll;
