import { Key } from "react";
import Message from "./Message";
import "./Messages.css";

const Messages = ({ messages, name }: any) => (
  <div className="messages">
    {messages.map((message: any, i: Key | null | undefined) => (
      <div key={i}>
        <Message message={message} name={name} />
      </div>
    ))}
  </div>
);

export default Messages;
