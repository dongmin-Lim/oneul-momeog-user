import axios from "axios";

export const KAKAO_REST_API_KEY = `42f0b39191f38da40872bb245e29ef06`;
export const KAKAO_REDIRECT_URI = `http://localhost:3000/login`;

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
