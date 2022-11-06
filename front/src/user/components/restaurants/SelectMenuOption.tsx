import axios from "axios";
import { useEffect, useState } from "react";
import { Accordion, useAccordionButton, Card } from "react-bootstrap";
import styled from "styled-components";

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

function SelectMenuOption() {
  interface groupsProps {
    groupId: number;
    groupName: string;
  }

  interface menusProps {
    menuId: number;
    menuName: string;
    description: string;
    price: number;
    menuImage: string;
    ingredients: string;
    soldOut: boolean;
  }
  const [groups, setGroups] = useState<groupsProps[]>([]);
  const [menus, setMenus] = useState<menusProps[]>([]);

  useEffect(() => {
    async function getGroupData() {
      try {
        const response = await axios.get(`/mockdata/RestaurantMenuGroup.json`);
        setGroups(response.data.data.groups);
        console.log(response.data.data.groups);
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
                {menus.map((menuValue, menuIndex) => (
                  <div key={menuIndex}>
                    <CustomOption eventKey={`${groupIndex}`}>
                      {menuValue.menuName}
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
export default SelectMenuOption;
