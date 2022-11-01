import { useState } from "react";
import styled from "styled-components";

// const menus = [
//   {
//     menuId: "menuId0",
//     menuName: "menuName0",
//     menuPrice: 12000,
//   },
// ];

const Div = styled.div`
  margin-top: 50px;
`;

const Menus = styled.div`
  border: 1px solid #aaaaaa;
  border-top: none;
  height: 650px;
  overflow: scroll;
`;

const Title = styled.div`
  border: 1px solid #aaaaaa;
  border-bottom: 2px solid black;
  height: 50px;
  line-height: 50px;
  text-align: center;
`;

const TotalPrice = styled.div`
  border: 1px solid #aaaaaa;
  border-top: 2px solid black;
  height: 50px;
  line-height: 50px;
  text-align: center;
`;

function MenuList() {
  const [orderMenu, setOrderMenu] = useState([
    {
      menuId: "menuId0",
      menuName: "menuName0",
      menuPrice: 12000,
    },
  ]);
  const totalPrice = orderMenu.reduce(
    (previousValue, currentValue) => previousValue + currentValue.menuPrice,
    0
  );
  return (
    <Div>
      <Title>주문목록</Title>
      <Menus>
        {orderMenu.map((value: any, index: number) => (
          <div key={index} style={{ borderBottom: "1px solid #aaaaaa" }}>
            <div>{value.menuName}</div>
            <div>{value.menuPrice.toLocaleString("ko-KR")}원</div>
          </div>
        ))}
      </Menus>
      <TotalPrice>총 주문 금액 {totalPrice.toLocaleString("ko-KR")}원</TotalPrice>
    </Div>
  );
}
export default MenuList;
