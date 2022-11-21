import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";

const Div = styled.div`
  margin-top: 50px;
`;

const Room = styled.div`
  border-bottom: 1px solid #aaaaaa;
  :hover {
    background-color: #d8f1ff;
  }
`;

const Rooms = styled.div`
  border: 1px solid #aaaaaa;
  border-top: none;
  height: 700px;
  overflow: scroll;
`;

const Title = styled.div`
  border: 1px solid #aaaaaa;
  border-bottom: 2px solid black;
  height: 50px;
  line-height: 50px;
  text-align: center;
`;

interface roomsProps {
  roomId: number;
  roomName: string;
  maxPeople: number;
  currentPeople: number;
  normalAddress: string;
  specificAddress: string;
  currentTime: string;
  dueTime: string;
}

interface roomListProps {
  rooms: roomsProps[];
}

function RoomList({ restaurantId }: any) {
  const [roomList, setRoomList] = useState<roomListProps[]>();

  useEffect(() => {
    async function getRoomListData() {
      try {
        const response = await axios.get(`/api/restaurants/${restaurantId}/room/list`);
        setRoomList(response.data.data);
      } catch (e) {
        console.log(e);
      }
    }
    getRoomListData();
  }, []);

  return (
    <Div>
      <Title>공동구매 방 목록</Title>
      <Rooms>
        {roomList?.map((value: any, index: number) => (
          <Room key={index}>
            <div>{value.roomName}</div>
            <div>[{value.currentPeople + "/" + value.maxPeople}]</div>
            <div>{value.specificAddress}</div>
            <div>남은시간 01:19</div>
          </Room>
        ))}
      </Rooms>
    </Div>
  );
}
export default RoomList;
