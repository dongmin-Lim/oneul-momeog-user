import { useEffect } from "react";
import styled from "styled-components";
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
    <CardContainer>
      {lists.map((value, index) => (
        <Card value={value} roomType={roomType} key={index} />
      ))}
    </CardContainer>
  );
}

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
  width: 1320px;
  margin: 0 auto;
`;

export default Rooms;
