import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ROUTES } from "../../../enum/routes";
import MenuList from "./MenuList";
import Review from "./Review";
import RoomList from "./RoomList";
import SelectMenuOption from "./SelectMenuOption";
import SelectRoomOption from "./SelectRoomOption";

const Img = styled.img`
  width: 380px;
`;

const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 50px;
  width: 1100px;
  margin: 0 auto;
  margin-top: 50px;
`;

const OrderButton = styled(Button)`
  width: 380px;
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

function Main() {
  return (
    <Div>
      <div>
        <Img src="../data/img/logo.png"></Img>
        <div style={{ border: "1px solid black", height: "80px", marginTop: "48px" }}>
          안녕하세요 치킨이 맛있는 bbq 입니다~~
        </div>
        <div style={{ border: "1px solid black", height: "80px", marginBottom: "50px" }}>
          사장님 한마디: 리뷰 남기면 콜라가 공짜
        </div>
        <Review />
      </div>

      <div>
        <SelectRoomOption />
        <RoomList />
      </div>

      <div>
        <SelectMenuOption />
        <MenuList />
      </div>

      <Link to={ROUTES.USER.PAY}>
        <OrderButton>구매하기</OrderButton>
      </Link>
    </Div>
  );
}
export default Main;
