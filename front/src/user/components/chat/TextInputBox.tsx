import React, { useState, useContext } from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import { WebSocketContext } from "../../websocket/WebSocketProvider";

function TextInputBox({ value }: any) {
  const [message, setMessage] = useState("");
  const ws = useContext(WebSocketContext);

  const handleChangeText = (e: any) => {
    setMessage(e.target.value);
  };

  const handleClickSubmit = (e: any) => {
    e.preventDefault();
    ws.current.send(
      JSON.stringify({
        userId: sessionStorage.getItem("userId"),
        userNickname: sessionStorage.getItem("nickname"),
        roomId: value.roomId,
        messageType: "text",
        content: message,
      })
    );
    setMessage("");
  };

  return (
    <form onSubmit={handleClickSubmit}>
      <InputWrapper
        type="text"
        value={message}
        onChange={handleChangeText}
      ></InputWrapper>
      <ButtonWrapper type="submit">전송</ButtonWrapper>
    </form>
  );
}

const InputWrapper = styled.input`
  height: 40px;
  width: 400px;
  border: 1px solid #aaa;
  border-right: none;
  border-radius: 10px 0 0 10px;
  padding: 0px 15px;
`;

const ButtonWrapper = styled.button`
  height: 40px;
  width: 70px;
  border: none;
  border-radius: 0px 10px 10px 0px;
  background-color: #f9e000;
`;

export default TextInputBox;
