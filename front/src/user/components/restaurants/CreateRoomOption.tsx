import { InputNumber } from "antd";
import CloseButton from "react-bootstrap/CloseButton";
import { useState } from "react";
import styled from "styled-components";
import DaumPost from "../../../components/DaumPost";

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
      <RoomOption>
        <OptionGrid>
          <div>방이름</div>
          <input onChange={roomNameChange}></input>
          <div>인원 선택</div>
          <InputNumber
            size="large"
            autoFocus={true}
            min={1}
            max={10}
            defaultValue={1}
            onChange={maxPeopleChange}
          />
          <div>구매 마감 타이머 설정</div>
          <InputNumber
            size="large"
            autoFocus={true}
            min={10}
            max={60}
            defaultValue={10}
            onChange={timerChange}
          />
        </OptionGrid>
        <div>최소시간 10분 최대시간 60분</div>
        <button onClick={() => setIsPopupOpen(!isPopupOpen)}>주소 검색</button>
        <input placeholder="주소" value={normalAddress} disabled></input>
        <input
          placeholder="상세주소"
          value={specificAddress}
          onChange={(e: any) => setSpecificAddress(e.target.value)}
        ></input>
      </RoomOption>
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
    </Div>
  );
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

const Div = styled.div`
  margin-top: 50px;
`;

const RoomOption = styled.div`
  border: 1px solid #aaaaaa;
  border-top: none;
  height: 700px;
  overflow: scroll;
`;

const OptionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const Title = styled.div`
  border: 1px solid #aaaaaa;
  border-bottom: 2px solid black;
  height: 50px;
  line-height: 50px;
  text-align: center;
`;

export default CreateRoomOption;
