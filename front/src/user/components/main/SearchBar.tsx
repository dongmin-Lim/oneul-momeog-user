import { Button, Container, Row, Col, InputGroup, Form } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";

const ButtonWrapper = styled(Button)`
  width: 350px;
  height: 50px;
  border: none;
  margin: 20px 0px;
  border-radius: 10px;
  background-color: ${(props) => props.bgcolor};
  color: black;

  :hover {
    background-color: #7bcfff;
    color: black;
  }
`;

const InputGroupWrapper = styled(InputGroup)`
  width: 350px;
  height: 50px;
  margin: 0 auto;
  margin-top: 20px;
`;

const FormControlWrapper = styled(Form.Control)`
  border-radius: 10px;
`;

const SearchBtn = styled(Button)`
  background-color: #d8f1ff;
  border: none;
  :hover {
    background-color: #7bcfff;
    color: black;
  }
`;

const SearchImg = styled.img`
  width: 25px;
  position: relative;
  top: 0;
  left: 0px;
  cursor: pointer;
`;

function SearchBar({ mode, setMode, searchObj, setSearchObj, categories }: any) {
  async function onSubmit(e: any) {
    e.preventDefault();
    try {
      const response = await axios.get(
        `http://211.188.65.107:8080/api/main/${mode}/search?search=${
          searchObj.search
        }&category=${categories.join()}&page=${searchObj.page}`
      );
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <Form onSubmit={onSubmit}>
      <Container>
        <Row className="justify-content-md-center">
          <Col>
            <ButtonWrapper
              onClick={() => setMode("rooms")}
              bgcolor={mode === "rooms" ? "#7bcfff" : "#d8f1ff"}
            >
              모집중인 공동구매 목록
            </ButtonWrapper>
          </Col>
          <Col>
            <ButtonWrapper
              onClick={() => setMode("restaurants")}
              bgcolor={mode === "rooms" ? "#d8f1ff" : "#7bcfff"}
            >
              음식점 찾기
            </ButtonWrapper>
          </Col>
          <Col style={{ verticalAlign: "middle" }}>
            <InputGroupWrapper className="mb-3">
              <FormControlWrapper
                placeholder="음식점 이름을 입력해주세요..."
                onChange={(e: any) =>
                  setSearchObj({ ...searchObj, search: e.target.value })
                }
              />
              <SearchBtn type="submit">
                <SearchImg src="data/img/search_icon.png" alt="search button" />
              </SearchBtn>
            </InputGroupWrapper>
          </Col>
        </Row>
      </Container>
    </Form>
  );
}
export default SearchBar;
