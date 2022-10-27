import axios from "axios";

function KakaoLoginData() {
  let query = window.location.search;
  let param = new URLSearchParams(query);
  let KAKAO_CODE = param.get("code");
  console.log(KAKAO_CODE);

  async function accessKakaoToken() {
    try {
      const response = await axios.get(
        `http://211.188.65.107:8080/api/auth/oauth/login/kakao?code=${KAKAO_CODE}`
      );
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  }

  accessKakaoToken();
  return <></>;
}

export default KakaoLoginData;
