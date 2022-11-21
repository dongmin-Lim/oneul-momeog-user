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

interface roomTypeProps {
  roomType: string;
  setRoomType: React.Dispatch<React.SetStateAction<string>>;
}

function HorizonScroll({ roomType, setRoomType }: roomTypeProps) {
  const [lists, setLists] = useState<roomsProps[]>([]);
  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(`/api/main/room/last`);
        setLists(response.data.data);
        console.log(response.data.data);
      } catch (e) {
        console.log(e);
      }
    }
    getData();
  }, []);

  var result = [];
  for (let i = 0; i < lists.length; i += 3) result.push(lists.slice(i, i + 3));

  return (
    <CarouselWrapper variant="dark">
      {result.map((values, index) => (
        <Carousel.Item key={index}>
          <Container>
            <Row className="justify-content-md-center">
              {values.map((room, index) => (
                <Col key={index}>
                  <Card value={room} roomType={roomType} />
                </Col>
              ))}
            </Row>
          </Container>
        </Carousel.Item>
      ))}
    </CarouselWrapper>
  );
}
export default HorizonScroll;
