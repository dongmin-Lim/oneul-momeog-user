import { useState } from "react";
import styled from "styled-components";

const Div = styled.div`
  width: 1320px;
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
  grid-template-rows: 60px;
  grid-row-gap: 30px;
`;

const Address = styled.input`
  height: 60px;
  width: 100%;
  border: 1px solid black;
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

function Main() {
  const [orderMenu, setOrderMenu] = useState([
    {
      menuId: "menuId0",
      menuName: "menuName0",
      menuPrice: 12000,
    },
    {
      menuId: "menuId1",
      menuName: "menuName1",
      menuPrice: 18000,
    },
    {
      menuId: "menuId2",
      menuName: "menuName2",
      menuPrice: 26000,
    },
  ]);
  const totalPrice = orderMenu.reduce(
    (previousValue, currentValue) => previousValue + currentValue.menuPrice,
    0
  );
  return (
    <Div>
      <PayGrid>
        <Info>
          <Address placeholder="배송지"></Address>
          <Mathod></Mathod>
        </Info>
        <Order>
          <OrderList>
            <Title>주문목록</Title>
            {orderMenu.map((value: any, index: number) => (
              <MenuOption key={index}>
                <MenuName>{value.menuName}</MenuName>
                <MenuValue>{value.menuPrice.toLocaleString("ko-KR")}원</MenuValue>
              </MenuOption>
            ))}
          </OrderList>
          <TotalPrice>
            <Title>결제 예정금액</Title>
            <PayOption>
              <PayName>상품금액</PayName>
              <PayValue>{totalPrice.toLocaleString("ko-KR")}원</PayValue>
            </PayOption>
            <PayOption>
              <PayName>배달금액</PayName>
              <PayValue>3,000원</PayValue>
            </PayOption>
            <PayOption>
              <PayName>합계</PayName>
              <PayValue>{(totalPrice + 3000).toLocaleString("ko-KR")}원</PayValue>
            </PayOption>
          </TotalPrice>
        </Order>
      </PayGrid>
    </Div>
  );
}
export default Main;
