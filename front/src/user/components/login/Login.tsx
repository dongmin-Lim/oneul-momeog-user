import { Form, Button } from "react-bootstrap";
import styled from "styled-components";

const Div = styled.div`
  width: 600px;
  margin: 0 auto;
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

const ButtonWrapper = styled(Button)`
  display: block;
  width: 300px;
  margin: 0 auto;
  margin-bottom: 10px;
`;

function Login() {
  const KAKAO_LOGIN_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_KAKAO_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}&response_type=code`;
  const GOOGLE_LOGIN_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.REACT_APP_GOOGLE_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_GOOGLE_REDIRECT_URI}&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email`;
  const NAVER_LOGIN_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.REACT_APP_NAVER_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_NAVER_REDIRECT_URI}`;

  function handleKakaoButton() {
    window.location.href = KAKAO_LOGIN_URL;
  }
  function handleGoogleButton() {
    window.location.href = GOOGLE_LOGIN_URL;
  }
  function handleNaverButton() {
    window.location.href = NAVER_LOGIN_URL;
  }
  return (
    <Div>
      <Form>
        <Img src="data/img/logo.png" alt="logo"></Img>
        <ButtonWrapper variant="outline-success" onClick={handleKakaoButton}>
          카카오
        </ButtonWrapper>
        <ButtonWrapper variant="outline-success" onClick={handleGoogleButton}>
          구글
        </ButtonWrapper>
        <ButtonWrapper variant="outline-success" onClick={handleNaverButton}>
          네이버
        </ButtonWrapper>
      </Form>
    </Div>
  );
}
export default Login;
