import axios from "axios";

const PARAMS = new URL(document.location).searchParams;
const GOOGLE_CODE = PARAMS.get("code");
// console.log(KAKAO_CODE);

// const authorizationCode = url.searchParams.get("code");

const handleGetAccessToken = async (authorizationCode) => {
  await axios.post(
    "http://localhost:80/sign/google", // 구글 소셜 로그인 엔드포인트
    {
      authorizationCode: authorizationCode,
    },
    {
      headers: { accept: `application/json` },
    }
  );
};

async function GoogleLoginData() {
  const response = await axios.get(
    `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_REDIRECT_URI}&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email`
  );
  console.log(response);
}
GoogleLoginData();
