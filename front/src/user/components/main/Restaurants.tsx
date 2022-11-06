import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "./Card";
import { listsProps } from "./Main";

interface roomTypeProps {
  lists: listsProps[];
  roomType: string;
  setRoomType: React.Dispatch<React.SetStateAction<string>>;
}

function Restaurants({ lists, roomType, setRoomType }: roomTypeProps) {
  useEffect(
    () => setRoomType("create") // 방 입장 시 참가자 권한으로 참여
  );

  return (
    <Container>
      <Row className="justify-content-md-center">
        {lists.map((value, index) => (
          <Col key={index}>
            <Card value={value} roomType={roomType} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
export default Restaurants;
