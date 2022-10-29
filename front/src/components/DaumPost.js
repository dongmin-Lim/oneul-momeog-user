// 주소입력창

import styled from "styled-components";
import DaumPostCode from "react-daum-postcode";

const DaumPostCodeWrapper = styled(DaumPostCode)`
  /* Positioning */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  /* Display & Box Model */
  box-shadow: 2px 3px 8px 0px rgb(150, 150, 150);
  padding: 30px;
  border: 0px solid black;
  border-radius: 20px;
  margin: 0 auto;

  /* Color */
  background-color: white;
`;

const DaumPost = ({ isPopupOpen, setNormalAddress, setSpecificAddress, setZipcode }) => {
  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";
    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    //fullAddress -> 전체 주소반환
    setNormalAddress(fullAddress);
    setSpecificAddress(extraAddress);
    setZipcode(data.zonecode);
  };
  return (
    <>
      {isPopupOpen ? (
        <DaumPostCodeWrapper
          style={{ width: "500px", height: "700px" }}
          onComplete={handleComplete}
          className="post-code"
        />
      ) : (
        <></>
      )}
    </>
  );
};
export default DaumPost;
