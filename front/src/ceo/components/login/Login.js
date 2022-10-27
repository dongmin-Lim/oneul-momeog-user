import { Link } from "react-router-dom";
import { ROUTES } from "../../../enum/routes";
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
  return (
    <Div>
      <Form>
        <Img src="../data/img/logo.png" alt="logo"></Img>
        <Form.Group className="mb-3" controlId="loginEmail">
          <FormControlWrapper type="email" placeholder="email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="loginPassword">
          <FormControlWrapper type="password" placeholder="Password" />
        </Form.Group>
        <ButtonWrapper variant="outline-success" type="submit">
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
