import axios from "axios";
import { useEffect, useState } from "react";
import { Accordion, useAccordionButton, Card } from "react-bootstrap";
import styled from "styled-components";
import { MenuProps } from "./Main";

interface groupsProps {
  groupId: number;
  groupName: string;
  menus: MenuProps[];
}

interface orderMenuProps {
  restaurantId: number;
  orderMenu: MenuProps[];
  setOrderMenu: React.Dispatch<React.SetStateAction<MenuProps[]>>;
  totalPrice: number;
  setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
  menus: any;
  setMenus: any;
}

function SelectMenuOption({
  restaurantId,
  orderMenu,
  setOrderMenu,
  totalPrice,
  setTotalPrice,
  menus,
  setMenus,
}: orderMenuProps) {
  const [groups, setGroups] = useState<groupsProps[]>([]);

  useEffect(() => {
    async function getGroupData() {
      try {
        const response = await axios.get(`/api/restaurants/${restaurantId}/groups`);
        setGroups(response.data.data);
        console.log(response);
      } catch (e) {
        console.log(e);
      }
    }
    getGroupData();
  }, []);

  function CustomToggle({ children, eventKey }: any) {
    const decoratedOnClick = useAccordionButton(eventKey);
    return <Button onClick={decoratedOnClick}>{children}</Button>;
  }

  function CustomOption({ children, eventKey }: any) {
    const decoratedOnClick = useAccordionButton(eventKey);
    return <OptionButton onClick={decoratedOnClick}>{children}</OptionButton>;
  }

  return (
    <Div>
      {groups.map((groupValue, groupIndex) => (
        <Accordion key={groupIndex}>
          <CardWrapper>
            <CardHeaderWrapper>
              <CustomToggle eventKey={`${groupIndex}`}>
                {groupValue.groupName}
              </CustomToggle>
            </CardHeaderWrapper>
            <Accordion.Collapse eventKey={`${groupIndex}`}>
              <>
                {groupValue.menus.map((menuValue, menuIndex) => (
                  <div
                    key={menuIndex}
                    onClick={() =>
                      orderMenu.some((value) => value.menuId === menuValue.menuId)
                        ? // 드롭다운에서 선택한 값과 이미 추가되어있는 값과 비교하여 이미 존재하면 추가안되게 구현
                          window.alert("해당항목이 존재합니다.")
                        : ((menuValue.count = 1),
                          setOrderMenu([...orderMenu, menuValue]),
                          setMenus([
                            ...menus,
                            { menuId: menuValue.menuId, count: menuValue.count },
                          ]),
                          console.log(orderMenu),
                          setTotalPrice((totalPrice += menuValue.price)))
                    }
                  >
                    <CustomOption eventKey={`${groupIndex}`}>
                      {menuValue.menuName}
                      {menuValue.price}원
                    </CustomOption>
                  </div>
                ))}
              </>
            </Accordion.Collapse>
          </CardWrapper>
        </Accordion>
      ))}
    </Div>
  );
}
const Div = styled.div`
  height: 200px;
  overflow: scroll;
  border: 1px solid #aaaaaa;
  .card {
    border-bottom: 1px solid #aaaaaa;
  }
  .card-header:first-child {
    border-radius: 0;
  }
`;

const CardWrapper = styled(Card)`
  padding: 0;
  border: none;
  border-radius: 0px;
`;

const CardHeaderWrapper = styled(Card.Header)`
  padding: 0;
  border: none;
  background-color: white;
  :hover {
    background-color: #eee;
  }
`;

const Button = styled.button`
  text-align: start;
  width: 100%;
  height: 30px;
  border: none;
  padding-left: 20px;
  background-color: rgba(0, 0, 0, 0);
`;

const OptionButton = styled.button`
  width: 100%;
  height: 30px;
  border: none;
  border-top: 1px solid #aaaaaa;
  padding-left: 40px;
  text-align: start;
  background-color: #d8f1ff;

  :hover {
    background-color: #7bcfff;
  }
`;
export default SelectMenuOption;
