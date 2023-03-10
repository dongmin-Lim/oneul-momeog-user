import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.headers.common["Authorization"] = `Bearer ${sessionStorage.getItem(
  "jwt"
)}`;

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<App />);
