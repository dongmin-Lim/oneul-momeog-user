import { Button, Modal } from "react-bootstrap";
import { Rate } from "antd";
import styled from "styled-components";
import SockJS from "sockjs-client";
import { useEffect, useState } from "react";

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
  const [modalShow, setModalShow] = useState<boolean>(false);
  const handleClose = () => setModalShow(false);

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

  const onConnect = () => {
    const sock = new SockJS("http://211.188.65.107:8081/webSocket");
    // var sock = new SockJS("http://211.188.65.107:8081/webSocket", null, {
    //   transports: ["websocket", "xhr-streaming", "xhr-polling"],
    // });
    sock.onmessage = function (e: any) {
      console.log(e.data);
    };
  };
  useEffect(() => onConnect(), []);
  return (
    <Div>
      <div>방제목</div>
      <Chat>
        <ChatBox>
          <Message></Message>
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
          <ReviewModal
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
export default Main;
