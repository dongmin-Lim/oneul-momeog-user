import { InputNumber } from "antd";
import CloseButton from "react-bootstrap/CloseButton";
import { useState } from "react";
import styled from "styled-components";
import DaumPost from "../../../components/DaumPost";

const ModalBackground = styled.div`
  z-index: 100;
  position: fixed;
  top: 0%;
  left: 0%;
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
`;

const Div = styled.div`
  margin-top: 50px;
`;

const CloseButtonWrapper = styled(CloseButton)`
  z-index: 10;
`;

// const Room = styled.div`
//   border-bottom: 1px solid #aaaaaa;
//   :hover {
//     background-color: #d8f1ff;
//   }
// `;

const Rooms = styled.div`
  border: 1px solid #aaaaaa;
  border-top: none;
  height: 700px;
  overflow: scroll;
`;

const Title = styled.div`
  border: 1px solid #aaaaaa;
  border-bottom: 2px solid black;
  height: 50px;
  line-height: 50px;
  text-align: center;
`;

function CreateRoomOption({
  isPopupOpen,
  setIsPopupOpen,
  roomOptionObj,
  setRoomOptionObj,
  normalAddress,
  setNormalAddress,
  specificAddress,
  setSpecificAddress,
  setZipcode,
}: any) {
  const roomNameChange = (e: any) => {
    console.log("roomNameChange", e.target.value);
    setRoomOptionObj({ ...roomOptionObj, roomName: e.target.value });
  };

  const maxPeopleChange = (value: any) => {
    console.log("maxPeopleChange", value);
    setRoomOptionObj({ ...roomOptionObj, maxPeople: value });
  };

  const timerChange = (value: any) => {
    console.log("timerChange", value);
    setRoomOptionObj({ ...roomOptionObj, timer: value });
  };

  return (
    <Div>
      <Title>방 생성하기 옵션</Title>
      <Rooms>
        <div>
          방이름
          <input onChange={roomNameChange}></input>
        </div>
        <div>
          인원 선택
          <InputNumber
            size="large"
            autoFocus={true}
            min={1}
            max={10}
            defaultValue={1}
            onChange={maxPeopleChange}
          />
        </div>
        <div>
          구매 마감 타이머 설정
          <InputNumber
            size="large"
            autoFocus={true}
            min={5}
            max={100}
            defaultValue={5}
            onChange={timerChange}
          />
          최소시간 5분 최대시간 100분
        </div>
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
        <button onClick={() => setIsPopupOpen(!isPopupOpen)}>주소 검색</button>
        <div>
          <input placeholder="주소" value={normalAddress} disabled></input>
        </div>
        <div>
          <input
            placeholder="상세주소"
            value={specificAddress}
            onChange={(e: any) => setSpecificAddress(e.target.value)}
          ></input>
        </div>
      </Rooms>
    </Div>
  );
}
export default CreateRoomOption;
