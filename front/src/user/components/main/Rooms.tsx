import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "./Card";
import { listsProps } from "./Main";

interface roomTypeProps {
  lists: listsProps[];
  roomType: string;
  setRoomType: React.Dispatch<React.SetStateAction<string>>;
}

function Rooms({ lists, roomType, setRoomType }: roomTypeProps) {
  useEffect(
    () => setRoomType("participant") // 방 입장 시 방생성자 권한으로 참여
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
export default Rooms;
