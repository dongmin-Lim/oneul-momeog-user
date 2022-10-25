import axios from "axios";

export const NAVER_CLIENT_ID = "hyd0WPN18GA2tP1Hrpgb";
export const NAVER_CLIENT_SECURE_ID = "wMZm6csF_u";
export const NAVER_REDIRECT_URI = `http://localhost:3000/login`;

const PARAMS = new URL(document.location).searchParams;
const NAVER_CODE = PARAMS.get("code");
console.log(NAVER_CODE);

// const handleGetAccessToken = async () => {
//   await axios.post(
//     `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&redirect_uri=${NAVER_REDIRECT_URI}`
//   );
// };

async function GoogleLoginData() {
  const response = await axios.get(
    `https://accounts.google.com/o/oauth2/v2/auth?client_id=${NAVER_CLIENT_ID}&redirect_uri=${NAVER_REDIRECT_URI}`
  );
  console.log(response);
}
GoogleLoginData();
