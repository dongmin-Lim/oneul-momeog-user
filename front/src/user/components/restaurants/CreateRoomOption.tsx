import { InputNumber } from "antd";
import styled from "styled-components";
import QuantityPicker from "../../../components/quantityPicker/QuantityPicker";

const Div = styled.div`
  margin-top: 50px;
`;

const Room = styled.div`
  border-bottom: 1px solid #aaaaaa;
  :hover {
    background-color: #d8f1ff;
  }
`;

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

function CreateRoomOption() {
  const onChange = (value: any) => {
    console.log("changed", value);
  };
  // TODO 인원수 피커는 구현하였으나 기능연결은 못함
  return (
    <Div>
      <Title>방 생성하기 옵션</Title>
      <Rooms>
        인원 선택
        <InputNumber
          size="large"
          autoFocus={true}
          min={1}
          max={10}
          defaultValue={1}
          onChange={onChange}
        />
      </Rooms>
    </Div>
  );
}
export default CreateRoomOption;
