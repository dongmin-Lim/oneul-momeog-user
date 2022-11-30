import { useState } from "react";
import styled from "styled-components";
import { MenuProps } from "./Main";
import { Button } from "react-bootstrap";
import QuantityPicker from "../../../components/quantityPicker/QuantityPicker";

interface orderMenuProps {
  orderMenu: MenuProps[];
  setOrderMenu: React.Dispatch<React.SetStateAction<MenuProps[]>>;
  menus: MenuProps[];
  setMenus: React.Dispatch<React.SetStateAction<MenuProps[]>>;
  totalPrice: number;
  setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
}

function MenuList({
  orderMenu,
  setOrderMenu,
  menus,
  setMenus,
  totalPrice,
  setTotalPrice,
}: orderMenuProps) {
  return (
    <Div>
      <Title>주문목록</Title>
      <Menus>
        {orderMenu.map((value: any, index: number) => (
          <Menu key={index}>
            <MenuName>{value.menuName}</MenuName>
            <MenuValue>{value.price.toLocaleString("ko-KR")}원</MenuValue>
            <QuanPicker>
              <QuantityPicker
                min={1}
                max={10}
                value={value}
                menus={menus[index]}
                num={totalPrice}
                setNum={setTotalPrice}
                orderMenu={orderMenu}
              />
            </QuanPicker>
            <ButtonWrapper
              variant="danger"
              onClick={() => (
                setTotalPrice((totalPrice -= value.price * value.count)),
                setOrderMenu(
                  orderMenu.filter((list: any) => {
                    return list !== value;
                  })
                )
              )}
            >
              삭제
            </ButtonWrapper>
          </Menu>
        ))}
      </Menus>
      <TotalPrice>총 주문 금액 {totalPrice.toLocaleString("ko-KR")}원</TotalPrice>
    </Div>
  );
}
const Div = styled.div`
  margin-top: 50px;
  box-shadow: 1px 2px 5px gray;
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
  margin-left: auto;
`;

const QuanPicker = styled.span`
  text-align: start;
`;

const Title = styled.div`
  border-bottom: 2px solid gray;
  height: 50px;
  line-height: 50px;
  text-align: center;
`;

const TotalPrice = styled.div`
  border-top: 2px solid gray;
  height: 50px;
  line-height: 50px;
  text-align: center;
`;
export default MenuList;
