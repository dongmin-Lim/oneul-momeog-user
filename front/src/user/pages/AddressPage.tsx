import { useState } from "react";
import Address from "../../user/components/login/Address";
import DaumPost from "../../components/DaumPost";
import styled from "styled-components";

const ModalBackground = styled.div`
  z-index: 100;
  position: fixed;
  top: 0%;
  left: 0%;
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
`;

function AddressPage() {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [normalAddress, setNormalAddress] = useState<string>();
  const [specificAddress, setSpecificAddress] = useState<string>();
  const [zipcode, setZipcode] = useState<number>();
  return (
    <>
      <Address
        isPopupOpen={isPopupOpen}
        setIsPopupOpen={setIsPopupOpen}
        normalAddress={normalAddress}
        setNormalAddress={setNormalAddress}
        specificAddress={specificAddress}
        setSpecificAddress={setSpecificAddress}
        zipcode={zipcode}
      />
      {isPopupOpen ? (
        <ModalBackground onClick={() => setIsPopupOpen(!isPopupOpen)}>
          <DaumPost
            isPopupOpen={isPopupOpen}
            setIsPopupOpen={setIsPopupOpen}
            setNormalAddress={setNormalAddress}
            setZipcode={setZipcode}
          />
        </ModalBackground>
      ) : (
        <></>
      )}
    </>
  );
}
export default AddressPage;
