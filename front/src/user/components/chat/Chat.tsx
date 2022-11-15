import { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

import TextContainer from "./TextContainer";
import Messages from "./Messages";
import Input from "./Input";

import "./Chat.css";

const ENDPOINT = "http://211.188.65.107:8081";

let socket: any;

const Chat = ({ location }: any) => {
  const [name, setName] = useState<string>("");
  const [room, setRoom] = useState<string>("");
  const [users, setUsers] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    const { name, room }: any = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setRoom(room);
    setName(name);

    socket.emit("join", { name, room }, (error: any) => {
      if (error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location?.search]);

  useEffect(() => {
    socket.on("message", (message: any) => {
      setMessages((messages) => [...messages, message]);
    });

    socket.on("roomData", ({ users }: any) => {
      setUsers(users);
    });
  }, []);

  const sendMessage = (event: any) => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <div className="outerContainer">
      <div className="container">
        <Messages messages={messages} name={name} />
        <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
      <TextContainer users={users} />
    </div>
  );
};

export default Chat;
