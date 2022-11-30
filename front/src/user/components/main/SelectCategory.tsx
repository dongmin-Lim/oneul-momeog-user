import { Dropdown, Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { restaurantTypeList } from "../../../enum/restaurantTypeList";

const Div = styled.div`
  width: 1320px;
  margin: 0 auto;
`;

const DropdownWrapper = styled(Dropdown)`
  width: 200px;
  height: 40px;
`;

const TypeTagList = styled.div`
  width: 1000px;
  display: inline;
`;

const TypeTag = styled.span`
  display: inline-block;
  width: fit-content;
  height: 40px;
  line-height: 36px;
  padding: 0px 10px;
  border: 2px solid #7bcfff;
  border-radius: 10px;
  margin-right: 5px;
  background-color: rgba(0, 0, 0, 0);
  color: black;
`;

function SelectCategory({ categories, setCategories }: any) {
  return (
    <Div>
      <Container>
        <Row className="justify-content-md-center">
          <Col>
            <DropdownWrapper className="mb-1">
              <Dropdown.Toggle id="dropdown-basic">음식점 업태 선택</Dropdown.Toggle>
              <Dropdown.Menu>
                {restaurantTypeList.map((value, index) => (
                  <Dropdown.Item
                    key={index}
                    onClick={() =>
                      categories.some((type: any) => type === value.categoryId)
                        ? // 드롭다운에서 선택한 값과 이미 추가되어있는 값과 비교하여 이미 존재하면 추가안되게 구현
                          window.alert("해당항목이 존재합니다.")
                        : setCategories([...categories, value.categoryId])
                    }
                  >
                    {restaurantTypeList[index].categoryName}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </DropdownWrapper>
          </Col>
          <Col>
            <TypeTagList>
              {categories.map((value: any, index: any) => (
                <TypeTag
                  key={index}
                  onClick={() =>
                    setCategories(
                      categories.filter((list: any) => {
                        return list !== value;
                      })
                    )
                  }
                >
                  {restaurantTypeList[value - 1].categoryName}
                </TypeTag>
              ))}
            </TypeTagList>
          </Col>
        </Row>
      </Container>
    </Div>
  );
}
export default SelectCategory;
