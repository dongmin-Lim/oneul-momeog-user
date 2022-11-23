import { useEffect, useState } from "react";
import styled from "styled-components";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";

function Main() {
  const [payData, setPayData] = useState<any>();

  const location = useLocation();
  const orderData = location.state.orderData;
  const restaurantId = location.state.restaurantId;
  const resultPrice = location.state.resultPrice;

  useEffect(() => {
    async function onPay() {
      try {
        const response = await axios.post(
          `/api/pay/${restaurantId}/${orderData?.orderId}`,
          {
            orderId: orderData?.orderId,
            restaurantId: restaurantId,
            roomId: orderData?.roomId,
            price: resultPrice,
          }
        );
        setPayData(response.data.data);
        console.log(response);
        if (!response.data.success) {
          window.alert(response.data.message);
        }
      } catch (e) {
        console.log(e);
      }
    }
    onPay();
  }, []);

  console.log(orderData);
  console.log(payData);

  return (
    <Div>
      <PayGrid>
        <Info>
          <Result>
            <div>{orderData.restaurantName}</div>
            <div>{orderData.deliveryLocation}</div>
            <div>
              주문일시 {payData?.payTime.toString().split("T")[0]}{" "}
              {payData?.payTime.substring(0, payData?.payTime.indexOf(".")).split("T")[1]}
            </div>
          </Result>
          <KakaoMap>
            <Map
              center={{ lat: 37.4775026, lng: 126.9550467 }}
              style={{ width: "100%", height: "100%", margin: "0px auto" }}
              level={4}
            >
              <MapMarker position={{ lat: 37.4775026, lng: 126.9550467 }} />
            </Map>
          </KakaoMap>
        </Info>
        <Order>
          <OrderList>
            <Title>주문목록</Title>
            {orderData.menus.map((value: any, index: number) => (
              <MenuOption key={index}>
                <MenuName>{value.menuName}</MenuName>
                <MenuValue>{value.price.toLocaleString("ko-KR")}원</MenuValue>
              </MenuOption>
            ))}
          </OrderList>
          <TotalPrice>
            <Title>결제금액</Title>
            <PayOption>
              <PayName>상품금액</PayName>
              <PayValue>{orderData.totalPrice.toLocaleString("ko-KR")}원</PayValue>
            </PayOption>
            <PayOption>
              <PayName>배달금액</PayName>
              <PayValue>{orderData.deliveryFee.toLocaleString("ko-KR")}원</PayValue>
            </PayOption>
            <PayOption>
              <PayName>결제방법</PayName>
              <PayValue>모먹페이</PayValue>
            </PayOption>
            <PayOption>
              <PayName>합계</PayName>
              <PayValue>
                {(orderData.totalPrice + orderData.deliveryFee).toLocaleString("ko-KR")}원
              </PayValue>
            </PayOption>
            <PayOption>
              <PayButton>홈으로</PayButton>
            </PayOption>
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
  border-bottom: 2px solid #777777;
  text-align: center;
  line-height: 60px;
`;

const PayGrid = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: 2fr 1fr;
  grid-column-gap: 30px;
`;

const Info = styled.div`
  display: grid;
  grid-template-rows: 300px;
  grid-row-gap: 30px;
`;

const Result = styled.div`
  width: 100%;
  border: 1px solid black;
`;

const KakaoMap = styled.div`
  border: 1px solid #aaaaaa;
`;

const Order = styled.div`
  display: grid;
  grid-template-rows: 53.5%;
  grid-row-gap: 30px;
`;

const OrderList = styled.div`
  border: 1px solid #aaaaaa;
`;

const TotalPrice = styled.div`
  border: 1px solid #aaaaaa;
`;

const MenuOption = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
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
