import { Button, Container, Row, Col, InputGroup, Form } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";
import { useEffect } from "react";
import { listsProps, SearchProps, RestaurantTypeProps } from "./Main";

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

interface Props {
  setLists: React.Dispatch<React.SetStateAction<listsProps[]>>;
  mode: string;
  setMode: React.Dispatch<React.SetStateAction<string>>;
  searchObj: SearchProps;
  setSearchObj: React.Dispatch<React.SetStateAction<SearchProps>>;
  categories: RestaurantTypeProps[];
  setCategories: React.Dispatch<React.SetStateAction<RestaurantTypeProps[]>>;
}

function SearchBar({
  setLists,
  mode,
  setMode,
  searchObj,
  setSearchObj,
  categories,
}: Props) {
  useEffect(() => {
    async function onSubmit() {
      try {
        const response = await axios.get(
          `http://211.188.65.107:8080/api/main/${mode}/search?search=${
            searchObj.search
          }&category=${categories.join()}&page=${searchObj.page}`
        );
        setLists(response.data.data);
        console.log(response.data);
      } catch (e) {
        console.log(e);
      }
    }
    onSubmit();
  }, [setLists, mode, categories, searchObj.search, searchObj.page]);
  return (
    <Form>
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
            </InputGroupWrapper>
          </Col>
        </Row>
      </Container>
    </Form>
  );
}
export default SearchBar;
