import { Button } from "react-bootstrap";
import styled from "styled-components";

const ButtonWrapper = styled(Button)`
  width: 400px;
  height: 50px;
  border: none;
  padding: 0;
  margin: 20px;
  border-radius: 10px;
  background-color: ${(props) => props.bgcolor};
  color: black;

  :hover {
    background-color: #7bcfff;
    color: black;
  }
`;
// "#d8f1ff"
const SearchForm = styled.input`
  width: 400px;
  height: 50px;
  border: 1.5px solid #aaaaaa;
  padding: 0;
  padding-left: 20px;
  margin: 20px;
  border-radius: 10px;
`;

function SearchBar({ setMode, mode }: any) {
  return (
    <div>
      <ButtonWrapper onClick={() => setMode(0)} bgcolor={mode ? "#d8f1ff" : "#7bcfff"}>
        모집중인 공동구매 목록
      </ButtonWrapper>
      <ButtonWrapper onClick={() => setMode(1)} bgcolor={mode ? "#7bcfff" : "#d8f1ff"}>
        음식점 찾기
      </ButtonWrapper>
      <SearchForm placeholder="음식점 이름을 입력해주세요..."></SearchForm>
    </div>
  );
}
export default SearchBar;
