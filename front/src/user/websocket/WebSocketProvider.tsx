import { current } from "@reduxjs/toolkit";
import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const WebSocketContext = React.createContext<any>(null);
export { WebSocketContext };

export default ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  const webSocketUrl = `ws://springboot-websocket-svc:8081/ws/chat?roomId=${location.state.value.roomId}`;
  let ws = useRef<WebSocket | null>(null);

  if (!ws.current) {
    ws.current = new WebSocket(webSocketUrl);

    ws.current.onopen = () => {};

    ws.current.onclose = (error) => {
      console.log(error);
    };

    ws.current.onerror = (error) => {
      console.log(error);
    };
  }

  return <WebSocketContext.Provider value={ws}>{children}</WebSocketContext.Provider>;
};
