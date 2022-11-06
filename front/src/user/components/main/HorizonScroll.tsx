import styled from "styled-components";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import Card from "./Card";
import axios from "axios";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

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

interface roomTypeProps {
  roomType: string;
  setRoomType: React.Dispatch<React.SetStateAction<string>>;
}

function HorizonScroll({ roomType, setRoomType }: roomTypeProps) {
  const [lists, setLists] = useState<roomsProps[]>([]);
  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(`http://211.188.65.107:8080/api/main/room/last`);
        setLists(response.data.data);
        console.log(response.data.data);
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
                <Card value={value} roomType={roomType} />
              </Col>
            ))}
          </Row>
        </Container>
      </Carousel.Item>
    </CarouselWrapper>
  );
}
export default HorizonScroll;
