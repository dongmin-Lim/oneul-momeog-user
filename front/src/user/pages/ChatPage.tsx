import Main from "../components/chat/Main";
import WebSocketProvider from "../websocket/WebSocketProvider";

function ChatPage() {
  return (
    <WebSocketProvider>
      <Main />
    </WebSocketProvider>
  );
}

export default ChatPage;
