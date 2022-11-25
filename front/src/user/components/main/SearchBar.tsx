import { Button, Form } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";
import { useEffect } from "react";
import { listsProps, SearchProps, RestaurantTypeProps } from "./Main";

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
          `/api/main/${mode}/search?search=${
            searchObj.search
          }&category=${categories.join()}&page=${searchObj.page}`
        );
        setLists(response.data.data);
        console.log(response);
      } catch (e) {
        console.log(e);
      }
    }
    onSubmit();
  }, [setLists, mode, categories, searchObj.search, searchObj.page]);
  return (
    <Container>
      <ButtonWrapper
        onClick={() => setMode("rooms")}
        bgcolor={mode === "rooms" ? "#7bcfff" : "#d8f1ff"}
      >
        모집중인 공동구매 목록
      </ButtonWrapper>
      <ButtonWrapper
        onClick={() => setMode("restaurants")}
        bgcolor={mode === "rooms" ? "#d8f1ff" : "#7bcfff"}
      >
        음식점 찾기
      </ButtonWrapper>
      <FormControlWrapper
        placeholder="음식점 이름을 입력해주세요..."
        onChange={(e: any) => setSearchObj({ ...searchObj, search: e.target.value })}
      />
    </Container>
  );
}
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

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
  width: 1320px;
  margin: 0 auto;
`;

const FormControlWrapper = styled(Form.Control)`
  width: 350px;
  height: 50px;
  border-radius: 10px;
`;
export default SearchBar;
