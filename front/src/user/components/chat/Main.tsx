import { useContext, useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Button, Modal } from "react-bootstrap";
import styled from "styled-components";
import { WebSocketContext } from "../../websocket/WebSocketProvider";
import TextInputBox from "./TextInputBox";
import ReviewModal from "./ReviewModal";

function Main() {
  const location = useLocation();
  const value = location.state.value;

  const [modalShow, setModalShow] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<number>(0);
  const [chats, setChats] = useState<any>([]);
  const [orderId, setOrderId] = useState<number>();

  const scrollRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  };
  useEffect(() => {
    scrollToBottom();
  }, [chats]);

  const ws = useContext(WebSocketContext);

  ws.current.onmessage = (evt: MessageEvent) => {
    const data = JSON.parse(evt.data);
    if (data.currentPeople) {
      setCurrentUser(data.currentPeople);
    }
    setChats([...chats, data]);
  };

  useEffect(() => {
    async function getChats() {
      try {
        const response = await axios.get(
          `http://springboot-websocket-svc:8081/api/chats/${value.roomId}/all?chatId=0`
        );
        setChats(response.data.data);
      } catch (e) {
        console.log(e);
      }
    }
    async function getOrderId() {
      try {
        const response = await axios.get(
          `/api/reviews/add?roomId=${value.roomId}&userId=${sessionStorage.getItem(
            "userId"
          )}`
        );
        setOrderId(response.data.data);
      } catch (e) {
        console.log(e);
      }
    }
    getChats();
    getOrderId();
  }, []);

  return (
    <Div>
      <ChatHeader>
        <RoomName>{value.roomName}</RoomName>
        <div>현재 접속 인원 {currentUser}명</div>
        <ReviewModal
          value={value}
          show={modalShow}
          orderId={orderId}
          onHide={() => setModalShow(false)}
        />
      </ChatHeader>
      <Chat>
        <ChatBox>
          <MessageBox ref={scrollRef}>
            {chats?.map((value: any) =>
              value.content ? (
                value.userId == sessionStorage.getItem("userId") ? (
                  <div className="myMsg">
                    <span className="msg">{value.content}</span>
                  </div>
                ) : (
                  <div className="anotherMsg">
                    <span className="anotherName">{value.nickname}</span>
                    {value.content === "리뷰를 작성해 주세요" ? (
                      <span
                        className="msg"
                        onClick={() => setModalShow(true)}
                        style={{ cursor: "pointer", color: "blue" }}
                      >
                        {value.content}
                      </span>
                    ) : (
                      <span className="msg">{value.content}</span>
                    )}
                  </div>
                )
              ) : (
                <></>
              )
            )}
          </MessageBox>
          <InputBox>
            <TextInputBox value={value} />
          </InputBox>
        </ChatBox>
      </Chat>
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

const MessageBox = styled.div`
  display: flex;

  flex-direction: column;

  overflow-y: auto;

  padding: 5px 20px;
  margin-bottom: 0;
  overflow: scroll;

  .myMsg {
    text-align: right;
  }

  .anotherMsg {
    text-align: left;
    margin-bottom: 5px;
  }

  .msg {
    display: inline-block;
    border-radius: 10px;
    padding: 7px 15px;
    margin-bottom: 0px;
    margin-top: 5px;
  }

  .anotherMsg > .msg {
    background-color: #cfcfcf;
    color: #000000;
  }

  .myMsg > .msg {
    background-color: #f9e000;
    color: #000000;
  }

  .anotherName {
    font-size: 12px;
    display: block;
  }
`;

const InputBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
`;

export default Main;
