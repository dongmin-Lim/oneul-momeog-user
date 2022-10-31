import { Button } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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

const Form = styled.form``;

const SearchBtn = styled.button`
  width: 25px;
  position: relative;
  top: 0;
  left: -80px;
  border: none;
  background-color: rgba(0, 0, 0, 0);
`;

const SearchInput = styled.input`
  width: 350px;
  height: 50px;
  vertical-align: middle;
  border: 1px solid #aaaaaa;
  border-radius: 10px;
  margin: 20px;
  padding-left: 20px;
  color: black;
  outline: none;
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
    <Container>
      <Form onSubmit={onSubmit}>
        <Row>
          <Col style={{ border: "none" }}>
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
          <Col>
            <SearchInput
              placeholder="음식점 이름을 입력해주세요..."
              onChange={(e: any) =>
                setSearchObj({ ...searchObj, search: e.target.value })
              }
            />
            <SearchBtn type="submit">
              <SearchImg src="data/img/search_icon.png" alt="search button" />
            </SearchBtn>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}
export default SearchBar;
