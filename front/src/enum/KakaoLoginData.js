import axios from "axios";

const PARAMS = new URL(document.location).searchParams;
const KAKAO_CODE = PARAMS.get("code");
console.log(KAKAO_CODE);

async function KakaoLoginData() {
  const response = await axios.get(
    `http://211.188.65.107:8080/api/auth/oauth/login/kakao?code=${KAKAO_CODE}`
  );
  console.log(response);
}
KakaoLoginData();
