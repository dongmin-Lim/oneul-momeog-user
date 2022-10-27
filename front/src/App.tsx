import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { ROUTES } from "./enum/routes";
import HomePage from "./pages/HomePage";
import UserLoginPage from "./user/pages/LoginPage";
import UserAddressPage from "./user/pages/AddressPage";
import CeoLoginPage from "./ceo/pages/LoginPage";
import CeoRegisterPage from "./ceo/pages/RegisterPage";
import KakaoLoginData from "./user/socialLogin/KakaoLoginData";
import NaverLoginData from "./user/socialLogin/NaverLoginData";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.USER.LOGIN} element={<UserLoginPage />} />
        <Route path={ROUTES.USER.ADDRESS} element={<UserAddressPage />} />
        <Route path={ROUTES.USER.KAKAO} element={<KakaoLoginData />} />
        <Route path={ROUTES.USER.NAVER} element={<NaverLoginData />} />
        <Route path={ROUTES.CEO.LOGIN} element={<CeoLoginPage />} />
        <Route path={ROUTES.CEO.REGISTER} element={<CeoRegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
