import axios from "axios";
import { ROUTES } from "../../enum/routes";

function KakaoLoginData() {
  let query: string = window.location.search;
  let param: URLSearchParams = new URLSearchParams(query);
  let KAKAO_CODE: string | null = param.get("code");
  console.log(KAKAO_CODE);

  async function accessKakaoToken() {
    try {
      const response = await axios.get(
        `http://211.188.65.107:8080/api/auth/oauth/login/kakao?code=${KAKAO_CODE}`
      );
      console.log(response);
      if (response.status == 200) {
        window.location.href = ROUTES.USER.ADDRESS;
      }
    } catch (e) {
      console.log(e);
    }
  }

  accessKakaoToken();
  return <></>;
}

export default KakaoLoginData;
