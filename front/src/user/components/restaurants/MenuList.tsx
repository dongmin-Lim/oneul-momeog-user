import { useState } from "react";
import styled from "styled-components";
import { MenuProps } from "./Main";
import QuantityPicker from "../../../components/quantityPicker/QuantityPicker";
import { Button } from "react-bootstrap";

const Div = styled.div`
  margin-top: 50px;
`;

const Menu = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  height: 80px;
  padding: 0px 20px;
  margin: 0 auto;
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

const MenuName = styled.div`
  display: inline;
  height: 40px;
  text-align: start;
  line-height: 40px;
`;

const MenuValue = styled.div`
  display: inline;
  height: 40px;
  text-align: end;
  line-height: 40px;
`;

const ButtonWrapper = styled(Button)`
  height: 32.5px;
  width: 100px;
  line-height: 32.5px;
  padding: 0px;
  padding-bottom: 10px;
`;

const QuanPicker = styled.span`
  text-align: end;
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
          <Menu key={index}>
            <MenuName>{value.menuName}</MenuName>
            <MenuValue>{value.price.toLocaleString("ko-KR")}원</MenuValue>
            <ButtonWrapper
              variant="danger"
              onClick={() =>
                setOrderMenu(
                  orderMenu.filter((list: any) => {
                    return list !== value;
                  })
                )
              }
            >
              삭제
            </ButtonWrapper>
            <QuanPicker>
              <QuantityPicker min={1} max={4} />
            </QuanPicker>
          </Menu>
        ))}
      </Menus>
      <TotalPrice>총 주문 금액 {totalPrice.toLocaleString("ko-KR")}원</TotalPrice>
    </Div>
  );
}
export default MenuList;
