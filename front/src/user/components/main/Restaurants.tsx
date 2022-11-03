import { Container, Row, Col } from "react-bootstrap";
import Card from "./Card";
import axios from "axios";
import { useState, useEffect } from "react";

export interface roomsProps {
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

function Restaurants() {
  const [lists, setLists] = useState<roomsProps[]>([]);
  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(`/mockdata/RestaurantListsApi.json`);
        setLists(response.data.data.rooms);
        // console.log(response.data.data.rooms);
      } catch (e) {
        console.log(e);
      }
    }
    getData();
  }, []);
  return (
    <Container>
      <Row className="justify-content-md-center">
        {lists.map((value, index) => (
          <Col key={index}>
            <Card value={value} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
export default Restaurants;
