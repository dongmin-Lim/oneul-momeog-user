import { Button, Modal } from "react-bootstrap";
import { Rate } from "antd";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

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

function Main() {
  const location = useLocation();
  const value = location.state.value;

  const [modalShow, setModalShow] = useState<boolean>(false);
  const [content, setContent] = useState<string>("");
  const handleClose = () => setModalShow(false);

  var exampleSocket = new WebSocket(
    `ws://211.188.65.107:8081/ws/chat?roomId=${value.roomId}`
  );

  exampleSocket.onmessage = function (event) {
    console.log(event.data);
  };

  // const onSend = () => {
  //   var msg = {
  //     userId: 1,
  //     roomId: 1,
  //     messageType: "text",
  //     content: "content",
  //   };

  //   exampleSocket.send(JSON.stringify(msg));
  // };

  const onSend = () => {
    var msg = {
      userId: sessionStorage.getItem("userId"),
      roomId: value.roomId,
      messageType: "text",
      content: content,
    };

    exampleSocket.send(JSON.stringify(msg));
  };

  const onClose = () => {
    exampleSocket.close();
  };

  function ReviewModal(props: any) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">채팅방 입장</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input></input>
          <Rate onChange={(e) => console.log(e)} />
          <Button>사진전송</Button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <Div>
      <div>방제목</div>
      <Chat>
        <ChatBox>
          <Message></Message>
          <InputBox>
            <Button>사진전송</Button>
            <input onChange={(e) => setContent(e.target.value)}></input>
            <Button onClick={onSend}>보내기</Button>
          </InputBox>
        </ChatBox>
        <ChatUserList>
          <div>1번 닉네임</div>
          <div>2번 닉네임</div>
          <div>3번 닉네임</div>
          <Button>채팅방 나가기</Button>
          <ReviewModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            setModalShow={setModalShow}
          />
          <Button onClick={() => onClose()}>채팅소켓종료</Button>
          <Button onClick={() => setModalShow(true)}>리뷰작성</Button> {/* 임시버튼*/}
        </ChatUserList>
      </Chat>
    </Div>
  );
}
export default Main;
