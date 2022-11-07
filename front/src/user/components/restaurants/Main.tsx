import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { ROUTES } from "../../../enum/routes";
import MenuList from "./MenuList";
import Review from "./Review";
import RoomList from "./RoomList";
import SelectMenuOption from "./SelectMenuOption";
import SelectRoomOption from "./SelectRoomOption";

const Img = styled.img`
  width: 380px;
  height: 200px;
  border: 1px solid #aaaaaa;
  padding: 10px;
  margin-bottom: 50px;
`;

const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 50px;
  width: 1100px;
  margin: 0 auto;
  margin-top: 50px;
`;

const Title = styled.h1`
  height: 50px;
  line-height: 50px;
  text-align: center;
`;

const Notice = styled.div`
  height: 150px;
  border: 1px solid black;
  padding: 10px;
  margin-top: 20px;
`;

const Event = styled.div`
  height: 150px;
  border: 1px solid black;
  padding: 10px;
  margin-top: 20px;
`;

const RoomInfoDiv = styled.div`
  height: 200px;
`;

const OrderButton = styled(Button)`
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

interface restaurantInfoProps {
  restaurantId: number;
  restaurantImage: string;
  restaurantName: string;
  branch: string;
  notice: string;
  event: string;
  ingredientsOrigin: string;
  meanRating: string;
}

interface roomInfoProps {
  currentPeople: number;
  currentTime: string;
  dueTime: string;
  maxPeople: number;
  normalAddress: string;
  restaurantId: number;
  restaurantImage: string;
  roomId: number;
  roomName: string;
  specificAddress: string;
}

export interface MenuProps {
  menuId: number;
  menuName: string;
  description: string;
  price: number;
  menuImage: string;
  ingredients: string;
  soldOut: boolean;
}

function Main() {
  const location = useLocation();
  const restaurantId = location.state.restaurantId;
  const roomId = location.state.roomId;
  const roomType = location.state.roomType;
  const [restaurantInfo, setRestaurantInfo] = useState<restaurantInfoProps>();
  const [roomInfo, setRoomInfo] = useState<roomInfoProps>();
  const [orderMenu, setOrderMenu] = useState<MenuProps[]>([]);

  useEffect(() => {
    async function getRestaurantData() {
      try {
        const response = await axios.get(
          `http://211.188.65.107:8080/api/restaurants/${restaurantId}`
        );
        setRestaurantInfo(response.data.data);
      } catch (e) {
        console.log(e);
      }
    }
    async function getRoomData() {
      try {
        const response = await axios.get(
          `http://211.188.65.107:8080/api/restaurants/${restaurantId}/room/default?roomId=${roomId}`
        );
        setRoomInfo(response.data.data);
      } catch (e) {
        console.log(e);
      }
    }
    getRestaurantData();
    getRoomData();
  }, []);

  function Participant() {
    return (
      <RoomInfoDiv>
        <div style={{ fontSize: "34px", padding: "3px 0px" }}>{roomInfo?.roomName}</div>
        <div style={{ padding: "3px 0px" }}>
          모집인원 [{roomInfo?.currentPeople}/{roomInfo?.maxPeople}]
        </div>
        <div style={{ padding: "3px 0px" }}>
          배송지 {roomInfo?.normalAddress} {roomInfo?.specificAddress}
        </div>
        <div style={{ padding: "3px 0px" }}>남은시간 12:12</div>
      </RoomInfoDiv>
    );
  }

  return (
    <Div>
      <div>
        <Img src="../data/img/logo.png"></Img>
        <Title>
          {restaurantInfo?.restaurantName} {restaurantInfo?.branch}
        </Title>
        <Notice>{restaurantInfo?.notice}</Notice>
        <Event
          style={{ border: "1px solid black", height: "50px", marginBottom: "50px" }}
        >
          사장님 한마디: {restaurantInfo?.event}
        </Event>
        <Review restaurantId={restaurantId} />
      </div>

      <div>
        {roomType === "participant" ? <Participant /> : <SelectRoomOption />}
        {roomType === "create" ? <></> : <RoomList restaurantId={restaurantId} />}
      </div>

      <div>
        <SelectMenuOption
          restaurantId={restaurantId}
          orderMenu={orderMenu}
          setOrderMenu={setOrderMenu}
        />
        <MenuList orderMenu={orderMenu} setOrderMenu={setOrderMenu} />
        <Link
          to={ROUTES.USER.PAY}
          state={{
            restaurantId: restaurantId,
            roomId: roomId,
            roomType: roomType,
            orderMenu: orderMenu,
          }}
        >
          <OrderButton>구매하기</OrderButton>
        </Link>
      </div>
    </Div>
  );
}
export default Main;
