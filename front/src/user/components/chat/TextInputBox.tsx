import React, { useState, useContext } from "react";
import { WebSocketContext } from "../../websocket/WebSocketProvider";

function TextInputBox({ value }: any) {
  const [message, setMessage] = useState("");
  const ws = useContext(WebSocketContext);

  const handleChangeText = (e: any) => {
    setMessage(e.target.value);
  };

  const handleClickSubmit = () => {
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
    <span>
      <input type="text" value={message} onChange={handleChangeText}></input>
      <button type="button" onClick={handleClickSubmit}>
        전송
      </button>
    </span>
  );
}

export default TextInputBox;
