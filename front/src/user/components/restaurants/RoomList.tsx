import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import TimeCalculator from "../../../components/TimeCalculator";

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
  restaurantId: number;
  restaurantImage: string;
  restaurantName: string;
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
        console.log(response.data);
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
        {roomList?.map((value: any) => (
          <Link
            to={`/restaurants/${value.restaurantId}`}
            state={{
              restaurantId: value.restaurantId,
              roomId: value.roomId,
              roomType: "participant",
            }}
            key={value.roomId}
          >
            <Room onClick={() => window.location.reload()}>
              <div>{value.roomName}</div>
              <div>[{value.currentPeople + "/" + value.maxPeople}]</div>
              <div>{value.specificAddress}</div>
              <TimeCalculator currentTime={value?.currentTime} dueTime={value?.dueTime} />
            </Room>
          </Link>
        ))}
      </Rooms>
    </Div>
  );
}
export default RoomList;
