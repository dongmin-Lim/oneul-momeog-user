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

const Img = styled.img`
  width: 380px;
  height: 200px;
  border: 1px solid #aaaaaa;
  padding: 10px;
`;

const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 50px;
  width: 1100px;
  margin: 0 auto;
  margin-top: 50px;
`;

const Title = styled.div`
  height: 50px;
  margin: 10px;
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

function Main() {
  const location = useLocation();
  const restaurantId = location.state.restaurantId;
  const roomId = location.state.roomId;
  const roomType = location.state.roomType;
  const [restaurantInfo, setRestaurantInfo] = useState<restaurantInfoProps>();
  const [roomInfo, setRoomInfo] = useState<roomInfoProps>();

  useEffect(() => {
    async function getRestaurantData() {
      try {
        const response = await axios.get(
          `http://211.188.65.107:8080/api/restaurants/${restaurantId}`
        );
        setRestaurantInfo(response.data.data);
        console.log(response.data.data);
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
        console.log(response.data.data);
      } catch (e) {
        console.log(e);
      }
    }
    getRestaurantData();
    getRoomData();
  }, []);

  function Participant() {
    return (
      <div>
        <div>
          <h1>{roomInfo?.roomName}</h1>
        </div>
        <div>
          모집인원 [{roomInfo?.currentPeople}/{roomInfo?.maxPeople}]
        </div>
        <div>
          배송지 {roomInfo?.normalAddress} {roomInfo?.specificAddress}
        </div>
        <div>남은시간 12:12</div>
      </div>
    );
  }

  return (
    <Div>
      <div>
        <Img src="../data/img/logo.png"></Img>
        <Title>
          <h1>
            {restaurantInfo?.restaurantName} {restaurantInfo?.branch}
          </h1>
        </Title>
        <Notice>{restaurantInfo?.notice}</Notice>
        <Event
          style={{ border: "1px solid black", height: "50px", marginBottom: "50px" }}
        >
          사장님 한마디: {restaurantInfo?.event}
        </Event>
        <Review />
      </div>

      <div>
        {roomType === "participant" ? <Participant /> : <SelectRoomOption />}
        {roomType === "create" ? <></> : <RoomList />}
      </div>

      <div>
        <SelectMenuOption />
        <MenuList />
        <Link to={ROUTES.USER.PAY}>
          <OrderButton>구매하기</OrderButton>
        </Link>
      </div>
    </Div>
  );
}
export default Main;
