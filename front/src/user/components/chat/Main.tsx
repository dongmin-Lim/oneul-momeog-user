import { Button } from "react-bootstrap";
import styled from "styled-components";
import SockJS from "sockjs-client";
import { useEffect } from "react";

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

const InputBox = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 95%;
  height: 50px;
  border: 1px solid black;
`;

const ChatBox = styled.div`
  margin: 0 auto;
  text-align: center;
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

function Main() {
  const onClickConnectBtn = () => {
    const sock = new SockJS("http://211.188.65.107:8081/webSocket");
    // var sock = new SockJS("http://211.188.65.107:8081/webSocket", null, {
    //   transports: ["websocket", "xhr-streaming", "xhr-polling"],
    // });
    sock.onmessage = function (e: any) {
      console.log(e.data);
    };
  };
  useEffect(() => onClickConnectBtn(), []);
  return (
    <Div>
      <div>방제목</div>
      <Chat>
        <ChatBox>
          <InputBox>
            <Button>사진전송</Button>
            <input></input>
            <Button>보내기</Button>
          </InputBox>
        </ChatBox>
        <ChatUserList>
          <div>1번 닉네임</div>
          <div>2번 닉네임</div>
          <div>3번 닉네임</div>
          <Button>채팅방 나가기</Button>
        </ChatUserList>
      </Chat>
    </Div>
  );
}
export default Main;
