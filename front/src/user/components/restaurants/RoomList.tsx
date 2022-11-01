import styled from "styled-components";

const rooms = [
  {
    roomId: "0",
    roomName: "roomName0",
    maxPeople: "4",
    currentPeople: "0",
    normalAddress: "normalAddress0",
    specificAddress: "specificAddress0",
    currentTime: "currentTime0",
    dueTime: "dueTime0",
  },
  {
    roomId: "1",
    roomName: "roomName1",
    maxPeople: "4",
    currentPeople: "1",
    normalAddress: "normalAddress1",
    specificAddress: "specificAddress1",
    currentTime: "currentTime1",
    dueTime: "dueTime1",
  },
  {
    roomId: "2",
    roomName: "roomName2",
    maxPeople: "4",
    currentPeople: "2",
    normalAddress: "normalAddress2",
    specificAddress: "specificAddress2",
    currentTime: "currentTime2",
    dueTime: "dueTime2",
  },
  {
    roomId: "3",
    roomName: "roomName3",
    maxPeople: "4",
    currentPeople: "3",
    normalAddress: "normalAddress3",
    specificAddress: "specificAddress3",
    currentTime: "currentTime3",
    dueTime: "dueTime3",
  },
];

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

function RoomList() {
  return (
    <Div>
      <Title>공동구매 방 목록</Title>
      <Rooms>
        {rooms.map((value: any, index: number) => (
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
