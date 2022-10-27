import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";

const Div = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 0;
  display: relative;
  width: 600px;
  margin: 0 auto;
  border: none;
  padding: 50px;
  border-radius: 20px;
  text-align: center;
  background-color: #d8f1ff;
  box-shadow: 2px 2px 6px 0px gray;
`;

// const Img = styled.img`
//   width: 500px;
//   padding: 100px;
// `;

const FormGroupWrapper = styled(Form.Group)`
  position: relative;

  display: grid;
  grid-template-columns: 200px 100px;
  width: 300px;
  margin: 0 auto;
`;

const FormControlWrapper = styled(Form.Control)`
  width: 300px;
  margin: 0 auto;
  border: 1.5px solid black;
  background-color: rgba(0, 0, 0, 0);
`;

const ButtonWrapper = styled(Button)`
  z-index: 1;
  width: 300px;
  margin: 0 auto;
  margin-bottom: 10px;
`;

function Register({
  isPopupOpen,
  setIsPopupOpen,
  normalAddress,
  setNormalAddress,
  specificAddress,
  setSpecificAddress,
  zipcode,
}: any) {
  type Password = { password: number; passwordCheck: number; passwordSame: boolean };

  const [email, setEmail] = useState<string>("");
  const [passwordObj, setPasswordObj] = useState<Password>({
    password: 0,
    passwordCheck: 0,
    passwordSame: true,
  });
  const [restaurantName, setRestaurantName] = useState<string>("");
  const [branch, setBranch] = useState<string>("");
  const [restaurantType, setRestaurantType] = useState("");

  async function data() {
    const response = await axios.post(
      "http://211.188.65.107:8080/api/auth/ceo/restaurant/register",
      {
        email: email,
        password: passwordObj.password,
        passwordCheck: passwordObj.passwordCheck,
        restaurantName: restaurantName,
        categories: [{ categoryId: 1, categoryName: "족발, 보쌈" }],
        zipcode: zipcode,
        normalAddress: normalAddress,
        specificAddress: specificAddress,
        branch: branch,
      }
    );
    const result = response;
    console.log(result);
  }

  async function EmailCheck() {
    console.log(email);
    const response = await axios.get(
      `http://211.188.65.107:8080/api/auth/ceo/email/check?email=${email}`
    );
    const result = response;
    console.log(result);
  }

  return (
    <Div>
      <Form>
        <h1>회원가입</h1>
        회원가입을 위해 정보를 입력해주세요
        <FormGroupWrapper className="mb-3" controlId="registerEmail">
          <FormControlWrapper
            type="email"
            placeholder="email"
            onChange={(e: any) => (setEmail(e.target.value), console.log(e.target.value))}
          />
          <Button variant="outline-success" onClick={EmailCheck}>
            중복확인
          </Button>
          <div>이미 존재하는 이메일입니다</div>
        </FormGroupWrapper>
        <div>비밀번호는 8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.</div>
        <Form.Group className="mb-3" controlId="registerPassword">
          <FormControlWrapper
            type="password"
            placeholder="비밀번호"
            onChange={(e: any) => (
              setPasswordObj({
                ...passwordObj,
                password: e.target.value,
                passwordSame:
                  passwordObj.password === passwordObj.passwordCheck ? false : true,
              }),
              console.log(e.target.value)
            )}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="registerPasswordCheck">
          <FormControlWrapper
            type="password"
            placeholder="비밀번호 확인"
            onChange={(e: any) => (
              setPasswordObj({
                ...passwordObj,
                passwordCheck: e.target.value,
                passwordSame:
                  passwordObj.password === passwordObj.passwordCheck ? false : true,
              }),
              console.log(e.target.value)
            )}
          />
          {passwordObj.passwordSame ? <></> : <div>비밀번호가 다릅니다.</div>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="restaurantName">
          <FormControlWrapper
            placeholder="음식점 이름"
            onChange={(e: any) => (
              setRestaurantName(e.target.value), console.log(e.target.value)
            )}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="branch">
          <FormControlWrapper
            placeholder="음식점 지점"
            onChange={(e: any) => (
              setBranch(e.target.value), console.log(e.target.value)
            )}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="restaurantType">
          <FormControlWrapper
            placeholder="음식 업태 ex) 한식, 중식..."
            onChange={(e: any) => (
              setRestaurantType(e.target.value), console.log(e.target.value)
            )}
          />
        </Form.Group>
        <FormGroupWrapper className="mb-3" controlId="zipcode">
          <FormControlWrapper placeholder="우편번호" value={zipcode} disabled />
          <Button variant="outline-success" onClick={() => setIsPopupOpen(!isPopupOpen)}>
            검색
          </Button>
        </FormGroupWrapper>
        <Form.Group className="mb-3" controlId="normalAddress">
          <FormControlWrapper
            placeholder="주소"
            value={normalAddress}
            disabled
            onChange={(e: any) => (
              setNormalAddress(e.target.value), console.log(e.target.value)
            )}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="specificAddress">
          <FormControlWrapper
            placeholder="상세주소"
            value={specificAddress}
            onChange={(e: any) => (
              setSpecificAddress(e.target.value), console.log(e.target.value)
            )}
          />
        </Form.Group>
        <ButtonWrapper variant="outline-primary" onClick={data}>
          회원가입
        </ButtonWrapper>
      </Form>
    </Div>
  );
}
export default Register;
