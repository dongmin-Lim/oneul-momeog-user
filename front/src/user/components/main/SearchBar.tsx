import { Button } from "react-bootstrap";
import styled from "styled-components";

const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const ButtonWrapper = styled(Button)`
  width: 400px;
  height: 50px;
  align-self: center;
  justify-self: center;
  border: none;
  font-size: 18px;
  background-color: #bce7ff;
  color: black;
`;

const SearchForm = styled.input`
  width: 400px;
  height: 50px;
  border: 2px solid gray;
  border-radius: 0.375rem;
  padding-left: 20px;
  align-self: center;
  justify-self: center;
  outline: none;
`;

function SearchBar() {
  return (
    <Div className="m-3">
      <ButtonWrapper>모집중인 공동구매 목록</ButtonWrapper>
      <ButtonWrapper>음식점 찾기</ButtonWrapper>
      <SearchForm placeholder="음식점 이름을 입력해주세요..."></SearchForm>
    </Div>
  );
}
export default SearchBar;
