import { Form, Button } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";
import { ROUTES } from "../../../enum/routes";

const Div = styled.div`
  z-index: 0;
  display: relative;
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

const H1 = styled.h1`
  font-size: 28px;
  margin-bottom: 30px;
`;

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
function Address({
  isPopupOpen,
  setIsPopupOpen,
  normalAddress,
  setNormalAddress,
  specificAddress,
  setSpecificAddress,
  zipcode,
}: any) {
  async function SubmitAddress() {
    const response = await axios.post(`/api/auth/oauth/address`, {
      zipcode: zipcode,
      normalAddress: normalAddress,
      specificAddress: specificAddress,
    });
    sessionStorage.setItem("normalAddress", normalAddress);
    response.data.success
      ? (window.location.href = ROUTES.USER.MAIN)
      : window.alert("에러가 발생하였습니다.");
  }

  return (
    <Div>
      <H1>배달받으실 주소를 입력해주세요</H1>
      <Form>
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
            onChange={(e: any) => setNormalAddress(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="specificAddress">
          <FormControlWrapper
            placeholder="상세주소"
            value={specificAddress}
            onChange={(e: any) => setSpecificAddress(e.target.value)}
          />
        </Form.Group>
        <ButtonWrapper variant="outline-primary" onClick={SubmitAddress}>
          회원가입
        </ButtonWrapper>
      </Form>
    </Div>
  );
}
export default Address;
