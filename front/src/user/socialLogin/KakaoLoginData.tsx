import axios from "axios";
import { ROUTES } from "../../enum/routes";

function KakaoLoginData() {
  let query: string = window.location.search;
  let param: URLSearchParams = new URLSearchParams(query);
  let KAKAO_CODE: string | null = param.get("code");

  async function accessKakaoToken() {
    try {
      const response = await axios.get(`/api/auth/oauth/login/kakao?code=${KAKAO_CODE}`);
      sessionStorage.setItem("jwt", response.data.data.jwt);
      sessionStorage.setItem("nickname", response.data.data.nickname);
      sessionStorage.setItem("normalAddress", response.data.data.normalAddress);
      sessionStorage.setItem("userId", response.data.data.userId);
      response.data.isRegister
        ? (window.location.href = ROUTES.USER.MAIN)
        : (window.location.href = ROUTES.USER.ADDRESS);
    } catch (e) {
      console.log(e);
    }
  }

  accessKakaoToken();
  return <></>;
}

export default KakaoLoginData;
