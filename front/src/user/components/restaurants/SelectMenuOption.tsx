import { Accordion, useAccordionButton, Card } from "react-bootstrap";
import styled from "styled-components";

const CardHeaderWrapper = styled(Card.Header)`
  padding: 0;
`;

const Button = styled.button`
  width: 100%;
  height: 50px;
  border: none;
  background-color: rgba(0, 0, 0, 0);
`;

const OptionButton = styled.button`
  width: 100%;
  height: 50px;
  border: none;
  border-bottom: 1px solid #d1d1d1;
  background-color: rgba(0, 0, 0, 0);
  :hover {
    background-color: #d1d1d1;
  }
`;

function SelectMenuOption() {
  function CustomToggle({ children, eventKey }: any) {
    const decoratedOnClick = useAccordionButton(eventKey);

    return <Button onClick={decoratedOnClick}>{children}</Button>;
  }

  function CustomOption({ children, eventKey }: any) {
    const decoratedOnClick = useAccordionButton(eventKey);

    return <OptionButton onClick={decoratedOnClick}>{children}</OptionButton>;
  }

  return (
    <Accordion>
      <Card>
        <CardHeaderWrapper>
          <CustomToggle eventKey="0">메뉴</CustomToggle>
        </CardHeaderWrapper>
        <Accordion.Collapse eventKey="0">
          <>
            <CustomOption eventKey="0">혼자구매</CustomOption>
            <CustomOption eventKey="0">공동구매</CustomOption>
          </>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}
export default SelectMenuOption;
