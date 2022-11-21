import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "antd/dist/antd.min.css";
import { ROUTES } from "./enum/routes";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import UserLoginPage from "./user/pages/LoginPage";
import UserAddressPage from "./user/pages/AddressPage";
import KakaoLoginData from "./user/socialLogin/KakaoLoginData";
import NaverLoginData from "./user/socialLogin/NaverLoginData";
import MainPage from "./user/pages/MainPage";
import RestaurantsPage from "./user/pages/RestaurantsPage";
import PayPage from "./user/pages/PayPage";
import PayCompletePage from "./user/pages/PayCompletePage";
import ReviewPage from "./user/pages/ReviewPage";
import ChatPage from "./user/pages/ChatPage";

function App() {
  // 인스턴스가 생성 된 후 기본값 변경

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.USER.LOGIN} element={<UserLoginPage />} />
        <Route path={ROUTES.USER.ADDRESS} element={<UserAddressPage />} />
        <Route path={ROUTES.USER.KAKAO} element={<KakaoLoginData />} />
        <Route path={ROUTES.USER.NAVER} element={<NaverLoginData />} />
        <Route path={ROUTES.USER.MAIN} element={<MainPage />} />
        <Route path={ROUTES.USER.CHAT} element={<ChatPage />} />
        <Route path={ROUTES.USER.RESTAURANTS} element={<RestaurantsPage />} />
        <Route path={ROUTES.USER.REVIEW} element={<ReviewPage />} />
        <Route path={ROUTES.USER.PAY} element={<PayPage />} />
        <Route path={ROUTES.USER.PAYCOMPLETE} element={<PayCompletePage />} />
      </Routes>
    </Router>
  );
}

export default App;
