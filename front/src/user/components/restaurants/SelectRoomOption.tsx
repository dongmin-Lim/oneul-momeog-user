import { useState } from "react";
import { Accordion, useAccordionButton, Card } from "react-bootstrap";
import styled from "styled-components";

const Div = styled.div`
  height: 200px;
  overflow: scroll;
  border: 1px solid #aaaaaa;
  .card {
    border-bottom: 1px solid #aaaaaa;
  }
  .card-header:first-child {
    border-radius: 0;
  }
`;

const CardWrapper = styled(Card)`
  padding: 0;
  border: none;
  border-radius: 0px;
`;

const CardHeaderWrapper = styled(Card.Header)`
  padding: 0;
  border: none;
  background-color: white;
  :hover {
    background-color: #eee;
  }
`;

const Button = styled.button`
  text-align: start;
  width: 100%;
  height: 30px;
  border: none;
  padding-left: 20px;
  background-color: rgba(0, 0, 0, 0);
`;

const OptionButton = styled.button`
  width: 100%;
  height: 30px;
  border: none;
  border-top: 1px solid #aaaaaa;
  padding-left: 40px;
  text-align: start;
  background-color: #d8f1ff;

  :hover {
    background-color: #7bcfff;
  }
`;

interface roomOptionProps {
  roomOption: string;
  setRoomOption: React.Dispatch<React.SetStateAction<string>>;
}

function SelectRoomOption({ roomOption, setRoomOption }: roomOptionProps) {
  function CustomToggle({ children, eventKey }: any) {
    const decoratedOnClick = useAccordionButton(eventKey);

    return <Button onClick={decoratedOnClick}>{children}</Button>;
  }

  function CustomOption({ children, eventKey }: any) {
    const decoratedOnClick = useAccordionButton(eventKey);

    return (
      <div
        onClick={() => {
          setRoomOption(children);
        }}
      >
        <OptionButton onClick={decoratedOnClick}>{children}</OptionButton>
      </div>
    );
  }
  // TODO: 방 선택에 따라 roomType을 바꿔서 구매하기 버튼 api요청 주소 바뀌도록 해야함
  return (
    <Div>
      <Accordion>
        <CardWrapper>
          <CardHeaderWrapper>
            <CustomToggle eventKey="0">{roomOption}</CustomToggle>
          </CardHeaderWrapper>
          <Accordion.Collapse eventKey="0">
            <>
              <CustomOption eventKey="0">혼자구매</CustomOption>
              <CustomOption eventKey="0">공동구매</CustomOption>
            </>
          </Accordion.Collapse>
        </CardWrapper>
      </Accordion>
    </Div>
  );
}

export default SelectRoomOption;
