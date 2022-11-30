import axios from "axios";
import { ROUTES } from "../../enum/routes";

function NaverLoginData() {
  let query: string = window.location.search;
  let param: URLSearchParams = new URLSearchParams(query);
  let NAVER_CODE: string | null = param.get("code");

  async function accessNaverToken() {
    try {
      const response = await axios.get(`/api/auth/oauth/login/naver?code=${NAVER_CODE}`);
      sessionStorage.setItem("jwt", response.data.data.jwt);
      sessionStorage.setItem("nickname", response.data.data.nickname);
      sessionStorage.setItem("normalAddress", response.data.data.normalAddress);
      sessionStorage.setItem("userId", response.data.data.userId);
      !response.data.data.isRegister
        ? (window.location.href = ROUTES.USER.ADDRESS)
        : (window.location.href = ROUTES.USER.MAIN);
    } catch (e) {
      console.log(e);
    }
  }

  accessNaverToken();
  return <></>;
}

export default NaverLoginData;
