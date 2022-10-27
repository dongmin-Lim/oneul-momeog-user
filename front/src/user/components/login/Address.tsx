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


  return (
    <Div>
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
        <ButtonWrapper variant="outline-primary">회원가입</ButtonWrapper>
      </Form>
    </Div>
  );
}
export default Register;
