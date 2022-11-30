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
import CreateRoomOption from "./CreateRoomOption";
import TimeCalculator from "../../../components/TimeCalculator";

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
  count?: any;
}

interface RoomOptionProps {
  roomName: string;
  maxPeople: number;
  timer: number;
}

function Main() {
  const location = useLocation();
  const restaurantId = location.state.restaurantId;
  const roomId = location.state.roomId;
  const roomType = location.state.roomType;

  const [restaurantInfo, setRestaurantInfo] = useState<restaurantInfoProps>();
  const [roomInfo, setRoomInfo] = useState<roomInfoProps>();
  const [roomOption, setRoomOption] = useState<string>("participant");
  const [orderMenu, setOrderMenu] = useState<MenuProps[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [menus, setMenus] = useState<any>([]);

  // CreateRoomOption Props
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [roomOptionObj, setRoomOptionObj] = useState<RoomOptionProps>({
    roomName: "",
    maxPeople: 1,
    timer: 10,
  });
  const [normalAddress, setNormalAddress] = useState<string>("");
  const [specificAddress, setSpecificAddress] = useState<string>("");
  const [zipcode, setZipcode] = useState<number>();

  useEffect(() => {
    async function getRestaurantData() {
      try {
        const response = await axios.get(`/api/restaurants/${restaurantId}`);
        setRestaurantInfo(response.data.data);
      } catch (e) {
        console.log(e);
      }
    }
    async function getRoomData() {
      try {
        const response = await axios.get(
          `/api/restaurants/${restaurantId}/room/default?roomId=${roomId}`
        );
        setRoomInfo(response.data.data);
        if (roomId && !response.data.success) {
          window.alert(response.data.message);
        }
      } catch (e) {
        console.log(e);
      }
    }
    getRestaurantData();
    if (roomId) {
      getRoomData();
    }
  }, []);

  function Participant() {
    return (
      <RoomInfoDiv>
        <div style={{ fontSize: "34px" }}>{roomInfo?.roomName}</div>
        <div>
          모집인원 [{roomInfo?.currentPeople}/{roomInfo?.maxPeople}]
        </div>
        <div>
          배송지 {roomInfo?.normalAddress} {roomInfo?.specificAddress}
        </div>
        <TimeCalculator currentTime={roomInfo?.currentTime} dueTime={roomInfo?.dueTime} />
      </RoomInfoDiv>
    );
  }

  return (
    <Div>
      <div>
        <Img src="../data/img/restaurant.png"></Img>
        <Title>
          {restaurantInfo?.restaurantName} {restaurantInfo?.branch}
        </Title>
        <Notice>{restaurantInfo?.notice}</Notice>
        <Event style={{ height: "50px", marginBottom: "50px" }}>
          사장님 한마디: {restaurantInfo?.event}
        </Event>
        <Review restaurantId={restaurantId} />
      </div>

      <div>
        {roomType === "participant" ? (
          <Participant />
        ) : (
          <SelectRoomOption roomOption={roomOption} setRoomOption={setRoomOption} />
        )}

        {roomType === "create" && roomOption === "create" ? (
          <CreateRoomOption
            isPopupOpen={isPopupOpen}
            setIsPopupOpen={setIsPopupOpen}
            roomOptionObj={roomOptionObj}
            setRoomOptionObj={setRoomOptionObj}
            normalAddress={normalAddress}
            setNormalAddress={setNormalAddress}
            specificAddress={specificAddress}
            setSpecificAddress={setSpecificAddress}
            setZipcode={setZipcode}
          />
        ) : roomType === "participant" ? (
          <RoomList restaurantId={restaurantId} />
        ) : (
          <></>
        )}
      </div>

      <div>
        <SelectMenuOption
          restaurantId={restaurantId}
          orderMenu={orderMenu}
          setOrderMenu={setOrderMenu}
          totalPrice={totalPrice}
          setTotalPrice={setTotalPrice}
          menus={menus}
          setMenus={setMenus}
        />
        <MenuList
          orderMenu={orderMenu}
          setOrderMenu={setOrderMenu}
          menus={menus}
          setMenus={setMenus}
          totalPrice={totalPrice}
          setTotalPrice={setTotalPrice}
        />
        <Link
          to={ROUTES.USER.PAY}
          state={{
            restaurantId: restaurantId,
            roomId: roomId,
            roomType: roomType,
            orderMenu: orderMenu,
            menus: menus,
            roomOption: roomOption,
            roomOptionObj: roomOptionObj,
            normalAddress: normalAddress,
            specificAddress: specificAddress,
            zipcode: zipcode,
          }}
        >
          <OrderButton>구매하기</OrderButton>
        </Link>
      </div>
    </Div>
  );
}
const Img = styled.img`
  width: 380px;
  height: 200px;
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
  box-shadow: 0.5px 1px 3px gray;
  padding: 10px;
  margin-top: 20px;
`;

const Event = styled.div`
  height: 150px;
  box-shadow: 0.5px 1px 3px gray;
  padding: 10px;
  margin-top: 20px;
`;

const RoomInfoDiv = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
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
export default Main;
