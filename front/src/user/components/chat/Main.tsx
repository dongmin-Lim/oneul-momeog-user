import { Button, Modal } from "react-bootstrap";
import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import TextInputBox from "./TextInputBox";
import ReviewModal from "./ReviewModal";
import { WebSocketContext } from "../../websocket/WebSocketProvider";
import axios from "axios";

function Main() {
  const location = useLocation();
  const value = location.state.value;

  const [modalShow, setModalShow] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<number>(0);

  const handleClose = () => setModalShow(false);
  const ws = useContext(WebSocketContext);

  ws.current.onmessage = (evt: MessageEvent) => {
    const data = JSON.parse(evt.data);
    setCurrentUser(data.currentPeople);
  };

  useEffect(() => {
    async function getChats() {
      try {
        const response = await axios.get(
          `http://211.188.65.107:8081/api/chats/${value.roomId}/all?chatId=5`
        );
        console.log(response.data.data);
      } catch (e) {
        console.log(e);
      }
    }
    getChats();
  }, []);

  return (
    <Div>
      <ChatHeader>
        <RoomName>방제목</RoomName>
        <div>현재 접속 인원 {currentUser}명</div>
        <ReviewModal
          value={value}
          show={modalShow}
          onHide={() => setModalShow(false)}
          setModalShow={setModalShow}
        />
      </ChatHeader>
      <Chat>
        <ChatBox>
          <Message></Message>
          <InputBox>
            <TextInputBox value={value} />
          </InputBox>
        </ChatBox>
      </Chat>
      <Button onClick={() => setModalShow(true)}>리뷰작성</Button> {/* 임시버튼*/}
    </Div>
  );
}
const Div = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 800px;
  height: 1000px;
`;

const ChatHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  width: 500px;
  height: 50px;
`;

const RoomName = styled.div`
  font-size: 24px;
`;

const Chat = styled.div`
  display: flex;
  flex-direction: row;
`;

const Message = styled.div``;

const InputBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
`;

const ChatBox = styled.div`
  margin: 0 auto;
  text-align: center;
  display: grid;
  grid-template-rows: 1fr 50px;
  width: 500px;
  height: 500px;
  border: 1px solid black;
  border-radius: 10px;
  padding-bottom: 5px;
`;

export default Main;
