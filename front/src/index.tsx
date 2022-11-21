import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

axios.defaults.headers.common["Authorization"] = `Bearer ${sessionStorage.getItem(
  "jwt"
)}`;

axios.defaults.baseURL = "http://175.45.208.84:8080";
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<App />);
