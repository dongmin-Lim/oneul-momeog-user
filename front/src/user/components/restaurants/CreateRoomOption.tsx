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
    setRoomOptionObj({ ...roomOptionObj, roomName: e.target.value });
  };

  const maxPeopleChange = (value: any) => {
    setRoomOptionObj({ ...roomOptionObj, maxPeople: value });
  };

  const timerChange = (value: any) => {
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
          <div>마감 타이머</div>
          <InputNumber
            size="large"
            autoFocus={true}
            min={1}
            max={60}
            defaultValue={1}
            onChange={timerChange}
          />
        </OptionGrid>
        <div style={{ textAlign: "center", marginBottom: "10px" }}>
          최소시간 1분 최대시간 60분
        </div>
        <ButtonWrapper
          style={{ width: "100%" }}
          onClick={() => setIsPopupOpen(!isPopupOpen)}
        >
          주소 검색
        </ButtonWrapper>
        <input
          placeholder="주소"
          value={normalAddress}
          style={{ width: "100%" }}
          disabled
        ></input>
        <input
          placeholder="상세주소"
          value={specificAddress}
          onChange={(e: any) => setSpecificAddress(e.target.value)}
          style={{ width: "100%" }}
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
  box-shadow: 1px 2px 5px gray;
`;

const RoomOption = styled.div`
  padding: 10px;
  border-top: none;
  height: 700px;
  overflow: scroll;
`;

const OptionGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 10px;
  align-items: center;
`;

const Title = styled.div`
  border-bottom: 2px solid gray;
  height: 50px;
  line-height: 50px;
  text-align: center;
`;

const ButtonWrapper = styled.button`
  border: 1.5px solid black;
  border-radius: 5px;
  background-color: white;
  margin-bottom: 5px;
  :hover {
    background-color: #dbeeff;
  }
`;

export default CreateRoomOption;
