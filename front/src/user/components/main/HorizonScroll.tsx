import styled from "styled-components";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import Card from "./Card";
import axios from "axios";
import { useEffect, useState } from "react";

const CarouselWrapper = styled(Carousel)`
  background-color: rgb(230, 230, 230);
  height: 250px;
  .carousel-indicators {
    margin: 0;
  }
`;

interface roomsProps {
  roomId: number;
  restaurantId: number;
  roomName: string;
  restaurantImage: string;
  restaurantName: string;
  maxPeople: number;
  currentPeople: number;
  currentTime: string;
  dueTime: string;
}

interface dataProps {
  rooms: roomsProps[];
}

interface resultProps {
  success: boolean;
  message: string;
  data: dataProps;
}

function HorizonScroll() {
  const [lists, setLists] = useState<roomsProps[]>([]);
  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(`/mockdata/RestaurantListsApi.json`);
        setLists(response.data.data.rooms);
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
            {lists.map((value, index) => (
              <Col key={index}>
                <Card value={value} />
              </Col>
            ))}
          </Row>
        </Container>
      </Carousel.Item>
    </CarouselWrapper>
  );
}
export default HorizonScroll;
