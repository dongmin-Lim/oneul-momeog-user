import { Form } from "react-bootstrap";
import styled from "styled-components";

const Div = styled.div`
  width: 600px;
  margin: 0 auto;
  margin-top: 5%;
  border: none;
  padding: 50px;
  border-radius: 20px;
  text-align: center;
  background-color: #d8f1ff;
  box-shadow: 2px 2px 6px 0px gray;
`;

const Img = styled.img`
  width: 500px;
  padding: 100px;
`;

const SocialBtn = styled.img`
  display: block;
  /* width: 300px; */
  height: 50px;
  margin: 0 auto;
  margin-bottom: 10px;
  cursor: pointer;
`;

function Login() {
  const KAKAO_LOGIN_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_KAKAO_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}`;
  const NAVER_LOGIN_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.REACT_APP_NAVER_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_NAVER_REDIRECT_URI}`;

  function handleKakaoButton() {
    window.location.href = KAKAO_LOGIN_URL;
  }
  function handleNaverButton() {
    window.location.href = NAVER_LOGIN_URL;
  }

  return (
    <Div>
      <Form>
        <Img src="../data/img/logo.png" alt="logo"></Img>
        <SocialBtn
          src="https://developers.kakao.com/tool/resource/static/img/button/login/full/ko/kakao_login_large_narrow.png"
          alt="kakao_login"
          onClick={handleKakaoButton}
        ></SocialBtn>
        <SocialBtn
          src="../data/img/naver_login_btn.png"
          alt="naver_login"
          onClick={handleNaverButton}
        ></SocialBtn>
      </Form>
    </Div>
  );
}
export default Login;
