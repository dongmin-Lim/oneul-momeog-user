import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ROUTES } from "../enum/routes";

interface Props {
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalBackground = styled.div`
  z-index: 100;
  position: fixed;
  top: 0%;
  left: 0%;
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
`;

const Modal = styled.div`
  z-index: 101;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  margin: 0 auto;
  padding: 100px 30px;
  border: 0px;
  border-radius: 20px;
  box-shadow: 2px 3px 8px 0px rgb(150, 150, 150);
  background-color: white;
  text-align: center;
`;

const ButtonWrapper = styled(Button)`
  width: 100%;
  height: 50px;
  border: none;
  margin-top: 30px;
  color: black;
  background-color: #d8f1ff;
  :hover {
    background-color: #7bcfff;
    color: black;
  }
`;

function AddressModal({ setIsModal }: Props) {
  useEffect(() => {
    document.body.style.cssText = `
          position: fixed;
          top: -${window.scrollY}px;
          overflow-y: scroll;
          width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  return (
    <ModalBackground>
      <Modal>
        주소를 입력해주세요
        <Link to={ROUTES.USER.ADDRESS}>
          <ButtonWrapper onClick={() => setIsModal(false)}>이동하기</ButtonWrapper>
        </Link>
      </Modal>
    </ModalBackground>
  );
}

export default AddressModal;
