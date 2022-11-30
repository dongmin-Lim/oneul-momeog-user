import styled from "styled-components";
import { Carousel } from "react-bootstrap";
import Card from "./Card";
import axios from "axios";
import { useEffect, useState } from "react";

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
            {values.map((room) => (
              <Card value={room} roomType={roomType} key={room.roomId} />
            ))}
          </Container>
        </Carousel.Item>
      ))}
    </CarouselWrapper>
  );
}
const CarouselWrapper = styled(Carousel)`
  background-color: rgb(240, 240, 240);
  height: 250px;
  .carousel-indicators {
    margin: 0;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
  width: 1320px;
  margin: 0 auto;
`;

export default HorizonScroll;
