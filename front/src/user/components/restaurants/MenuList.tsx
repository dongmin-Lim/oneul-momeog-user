import { useState } from "react";
import styled from "styled-components";
import { MenuProps } from "./Main";

const Div = styled.div`
  margin-top: 50px;
`;

const Menu = styled.div`
  border-bottom: 1px solid #aaaaaa;
  :hover {
    background-color: #eeeeee;
  }
`;

const Menus = styled.div`
  border: 1px solid #aaaaaa;
  border-top: none;
  border-bottom: none;
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

interface orderMenuProps {
  orderMenu: MenuProps[];
  setOrderMenu: React.Dispatch<React.SetStateAction<MenuProps[]>>;
}

function MenuList({ orderMenu, setOrderMenu }: orderMenuProps) {
  const totalPrice = orderMenu.reduce(
    (previousValue, currentValue) => previousValue + currentValue.price,
    0
  );

  console.log(orderMenu);

  return (
    <Div>
      <Title>주문목록</Title>
      <Menus>
        {orderMenu.map((value: any, index: number) => (
          <Menu
            key={index}
            onClick={() =>
              setOrderMenu(
                orderMenu.filter((list: any) => {
                  return list !== value;
                })
              )
            }
          >
            <div>{value.menuName}</div>
            <div>{value.price.toLocaleString("ko-KR")}원</div>
          </Menu>
        ))}
      </Menus>
      <TotalPrice>총 주문 금액 {totalPrice.toLocaleString("ko-KR")}원</TotalPrice>
    </Div>
  );
}
export default MenuList;
