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
          `http://211.188.65.107:8081/api/chats/${value.roomId}/all`
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
      <div>방제목</div>
      <Chat>
        <ChatBox>
          <Message></Message>
          <InputBox>
            <Button>사진전송</Button>
            <TextInputBox value={value} />
          </InputBox>
        </ChatBox>
        <ChatUserList>
          <div>현재 접속 인원: {currentUser}명</div>
          <ReviewModal
            value={value}
            show={modalShow}
            onHide={() => setModalShow(false)}
            setModalShow={setModalShow}
          />
          <Button onClick={() => setModalShow(true)}>리뷰작성</Button> {/* 임시버튼*/}
        </ChatUserList>
      </Chat>
    </Div>
  );
}
const Div = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 1000px;
  height: 1000px;
  border: 1px solid black;
`;

const Chat = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
`;

const Message = styled.div``;

const InputBox = styled.div`
  display: inline;
  margin: 0 auto;
  text-align: center;
  width: 95%;
  height: 50px;
  border: 1px solid black;
`;

const ChatBox = styled.div`
  margin: 0 auto;
  text-align: center;
  display: grid;
  grid-template-rows: 1fr 50px;
  width: 500px;
  height: 500px;
  border: 1px solid black;
`;

const ChatUserList = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 200px;
  height: 300px;
  border: 1px solid black;
`;

export default Main;
