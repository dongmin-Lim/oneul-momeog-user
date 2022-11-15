import { Button } from "react-bootstrap";
import styled from "styled-components";

const Div = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 1000px;
  height: 1000px;
  border: 1px solid black;
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

const UserList = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 200px;
  height: 300px;
  border: 1px solid black;
`;

function Main() {
  return (
    <Div>
      <div>방제목</div>
      <ChatBox>
        <InputBox>
          <Button>사진전송</Button>
          <input></input>
          <Button>보내기</Button>
        </InputBox>
      </ChatBox>
      <UserList>
        <div>1번 닉네임</div>
        <div>2번 닉네임</div>
        <div>3번 닉네임</div>
      </UserList>
      <Button>채팅방 나가기</Button>
    </Div>
  );
}
export default Main;
