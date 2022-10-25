import axios from "axios";

export const GOOGLE_CLIENT_ID =
  "842579925784-hq9t691ft4jpsfglpre02f0ld8papvhc.apps.googleusercontent.com";
export const GOOGLE_CLIENT_SECURE_ID = "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";
export const GOOGLE_REDIRECT_URI = `http://localhost:3000/login`;

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
