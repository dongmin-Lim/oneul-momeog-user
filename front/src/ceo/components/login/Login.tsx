import { Link } from "react-router-dom";
import { ROUTES } from "../../../enum/routes";
import { Form, Button } from "react-bootstrap";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";

const Div = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
  width: 200px;
  padding-bottom: 50px;
`;

const FormControlWrapper = styled(Form.Control)`
  width: 300px;
  margin: 0 auto;
  border: 1.5px solid black;
  background-color: rgba(0, 0, 0, 0);
`;

const ButtonWrapper = styled(Button)`
  display: block;
  width: 300px;
  margin: 0 auto;
  margin-bottom: 10px;
`;

function Login() {
  type Login = { email: string; password: string };

  const [loginObj, setLoginObj] = useState<Login>({
    email: "",
    password: "",
  });

  async function handleLogin() {
    const response = await axios.post(
      "http://211.188.65.107:8080/api/auth/ceo/restaurant/login",
      {
        email: loginObj.email,
        password: loginObj.password,
      }
    );
    // JWT
    const { accessToken } = response.data;
    // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  }

  return (
    <Div>
      <Form>
        <Img src="../data/img/logo.png" alt="logo"></Img>
        <Form.Group className="mb-3" controlId="loginEmail">
          <FormControlWrapper
            type="email"
            placeholder="email"
            onChange={(e: any) =>
              setLoginObj({
                ...loginObj,
                email: e.target.value,
              })
            }
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="loginPassword">
          <FormControlWrapper
            type="password"
            placeholder="Password"
            onChange={(e: any) =>
              setLoginObj({
                ...loginObj,
                password: e.target.value,
              })
            }
          />
        </Form.Group>
        <ButtonWrapper variant="outline-success" onClick={handleLogin}>
          로그인
        </ButtonWrapper>
        <Link to={ROUTES.CEO.REGISTER}>
          <ButtonWrapper variant="outline-primary">회원가입</ButtonWrapper>
        </Link>
      </Form>
    </Div>
  );
}
export default Login;
