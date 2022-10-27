import axios from "axios";

function GoogleLoginData() {
  let query: string = window.location.search;
  let param: URLSearchParams = new URLSearchParams(query);
  let GOOGLE_CODE: string | null = param.get("code");
  console.log(GOOGLE_CODE);

  async function accessGoogleToken() {
    try {
      const response = await axios.get(
        `http://211.188.65.107:8080/api/auth/oauth/login/google?code=${GOOGLE_CODE}`
      );
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  }

  accessGoogleToken();
  return <></>;
}

export default GoogleLoginData;
