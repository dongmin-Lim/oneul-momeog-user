import axios from "axios";

function NaverLoginData() {
  let query: string = window.location.search;
  let param: URLSearchParams = new URLSearchParams(query);
  let NAVER_CODE: string | null = param.get("code");
  console.log(NAVER_CODE);

  async function accessNaverToken() {
    try {
      const response = await axios.get(
        `http://211.188.65.107:8080/api/auth/oauth/login/naver?code=${NAVER_CODE}`
      );
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  }

  accessNaverToken();
  return <></>;
}

export default NaverLoginData;