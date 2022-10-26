import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { ROUTES } from "./enum/routes";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import KakaoLoginData from "./socialLogin/KakaoLoginData";
import NaverLoginData from "./socialLogin/NaverLoginData";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.USER.LOGIN} element={<LoginPage />} />
        <Route path={ROUTES.USER.REGISTER} element={<RegisterPage />} />
        <Route path={ROUTES.USER.KAKAO} element={<KakaoLoginData />} />
        <Route path={ROUTES.USER.NAVER} element={<NaverLoginData />} />
      </Routes>
    </Router>
  );
}

export default App;
