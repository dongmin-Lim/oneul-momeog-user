import axios from "axios";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { ROUTES } from "../../../enum/routes";

interface menusProps {
  menuId: number;
  menuName: string;
  price: number;
  quantity: number;
}

interface orderDataProps {
  orderId: number;
  roomId: number;
  deliveryLocation: string;
  menus: menusProps[];
  totalPrice: number;
  deliveryFee: number;
}

function Main() {
  const location = useLocation();
  const restaurantId = location.state.restaurantId;
  const roomId = location.state.roomId;
  const roomType = location.state.roomType;
  const orderMenu = location.state.orderMenu;
  const menus = location.state.menus;
  const roomOption = location.state.roomOption;
  const roomOptionObj = location.state.roomOptionObj;
  const normalAddress = location.state.normalAddress;
  const specificAddress = location.state.specificAddress;
  const zipcode = location.state.zipcode;

  const [orderData, setOrderData] = useState<orderDataProps>();
  const [resultPrice, setResultPrice] = useState<number>();

  useEffect(() => {
    async function getOrderData() {
      try {
        const response = await axios.post(
          `/api/restaurants/${restaurantId}/room/${roomId}/order`,
          {
            restaurantId: restaurantId,
            roomId: roomId,
            menus: menus,
          }
        );
        setOrderData(response.data.data);
        setResultPrice(response.data.data.totalPrice + response.data.data.deliveryFee);

        if (!response.data.success) {
          window.alert(response.data.message);
        }
      } catch (e) {
        console.log(e);
      }
    }
    async function getSingleOrderData() {
      try {
        const response = await axios.post(
          `/api/restaurants/${restaurantId}/${roomOption}/order`,
          {
            restaurantId: restaurantId,
            menus: menus,
          }
        );
        setOrderData(response.data.data);
        setResultPrice(response.data.data.totalPrice + response.data.data.deliveryFee);
        if (!response.data.success) {
          window.alert(response.data.message);
        }
      } catch (e) {
        console.log(e);
      }
    }
    async function getCreateOrderData() {
      try {
        const response = await axios.post(
          `/api/restaurants/${restaurantId}/create/order`,
          {
            restaurantId: restaurantId,
            roomName: roomOptionObj.roomName,
            zipcode: zipcode,
            normalAddress: normalAddress,
            specificAddress: specificAddress,
            menus: menus,
            maxPeople: roomOptionObj.maxPeople,
            timer: roomOptionObj.timer,
          }
        );
        setOrderData(response.data.data);
        setResultPrice(response.data.data.totalPrice + response.data.data.deliveryFee);
        if (!response.data.success) {
          window.alert(response.data.message);
        }
      } catch (e) {
        console.log(e);
      }
    }
    roomOption === "participant"
      ? getOrderData()
      : roomOption === "create"
      ? getCreateOrderData()
      : getSingleOrderData();
  }, []);

  return (
    <Div>
      <PayGrid>
        <Info>
          <Address
            placeholder="배송지"
            value={orderData?.deliveryLocation}
            disabled={roomType === "participant" ? true : false}
          ></Address>
          {/* <Mathod></Mathod> */}
        </Info>
        <Order>
          <OrderList>
            <Title>주문목록</Title>
            {orderData?.menus.map((value: any, index: number) => (
              <MenuOption key={index}>
                <MenuName>{value.menuName}</MenuName>
                <MenuValue>수량 {menus[index].count}개</MenuValue>
                <MenuValue>
                  {(menus[index].count * value.price).toLocaleString("ko-KR")}원{" "}
                  {/* 개당가격 곱하기 갯수 */}
                </MenuValue>
              </MenuOption>
            ))}
          </OrderList>
          <TotalPrice>
            <Title>결제 예정금액</Title>
            <PayOption>
              <PayName>상품금액</PayName>
              <PayValue>{orderData?.totalPrice.toLocaleString("ko-KR")}원</PayValue>
            </PayOption>
            <PayOption>
              <PayName>배달금액</PayName>
              <PayValue>{orderData?.deliveryFee.toLocaleString("ko-KR")}원</PayValue>
            </PayOption>
            <PayOption>
              <PayName>합계</PayName>
              <PayValue>{resultPrice?.toLocaleString("ko-KR")}원</PayValue>
            </PayOption>
            <Link
              to={ROUTES.USER.PAYCOMPLETE}
              state={{
                restaurantId: restaurantId,
                orderData: orderData,
                resultPrice: resultPrice,
              }}
            >
              <PayButton>결제</PayButton>
            </Link>
          </TotalPrice>
        </Order>
      </PayGrid>
    </Div>
  );
}

const Div = styled.div`
  width: 1100px;
  height: 800px;
  margin: 0 auto;
  margin-top: 50px;
`;

const Title = styled.div`
  height: 59px;
  border-bottom: 2px solid gray;
  text-align: center;
  line-height: 60px;
  font-size: large;
`;

const PayGrid = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: 2fr 1fr;
  grid-column-gap: 30px;
`;

const Info = styled.div`
  display: grid;
  grid-template-rows: 60px;
  grid-row-gap: 30px;
`;

const Address = styled.input`
  height: 60px;
  width: 100%;
  box-shadow: 1px 2px 5px gray;
  border: none;
  padding: 0px 20px;
`;

const Mathod = styled.div`
  border: 1px solid blue;
`;

const Order = styled.div`
  display: grid;
  grid-template-rows: 60%;
  grid-row-gap: 30px;
`;

const OrderList = styled.div`
  box-shadow: 1px 2px 5px gray;
`;

const TotalPrice = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 1px 2px 5px gray;
  text-align: center;
`;

const MenuOption = styled.div`
  display: grid;
  grid-template-columns: 50% 25% 25%;
  height: 70px;
  padding: 0px 20px;
  border-bottom: 1px solid #aaaaaa;
`;

const MenuName = styled.div`
  display: inline;
  height: 70px;
  text-align: start;
  line-height: 70px;
`;

const MenuValue = styled.div`
  display: inline;
  height: 70px;
  text-align: end;
  line-height: 70px;
`;

const PayOption = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  height: 50px;
  padding: 0px 20px;
  border-bottom: none;
  line-height: 50px;
`;

const PayName = styled.div`
  display: inline;
  height: 50px;
  text-align: start;
  line-height: 50px;
`;

const PayValue = styled.div`
  display: inline;
  height: 50px;
  text-align: end;
  line-height: 50px;
`;

const PayButton = styled(Button)`
  width: 320px;
  height: 50px;
  border: none;
  margin-top: 15px;
  color: black;
  background-color: #d8f1ff;
  :hover {
    background-color: #7bcfff;
    color: black;
  }
`;
export default Main;
