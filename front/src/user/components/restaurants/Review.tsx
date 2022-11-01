import { Button } from "react-bootstrap";
import styled from "styled-components";

const ReviewDiv = styled.div`
  height: 200px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  border: 1px solid #808080;
  border-radius: 10px;
  padding: 10px;
`;

const ReviewImg = styled.img`
  height: 120px;
`;

const ReviewContent = styled.div`
  overflow: hidden;
  font-size: small;
`;

const ReviewLabel = styled.div`
  border: 1px solid red;
  width: fit-content;
  padding: 1px 5px;
  color: red;
`;

const ReviewButton = styled(Button)`
  border: none;
  color: black;
  background-color: #d8f1ff;
  :hover {
    background-color: #7bcfff;
    color: black;
  }
`;

function Review() {
  return (
    <ReviewDiv>
      <ReviewImg src="../data/img/logo.png"></ReviewImg>
      <ReviewContent>
        <ReviewLabel>추천리뷰</ReviewLabel>
        <div style={{ padding: "5px 0px" }}>
          <span>관악구 불주먹 </span>
          <span>⭐️⭐️⭐️⭐️⭐️ 5</span>
        </div>
        <div>
          배달도 엄청 빨리와서 만족했습니다. 닭 튀김도 두껍지 않고 엄청 바삭하네요 속살도
          엄청 부드러워서 제가 먹어본 bbq중에 여기가 가장 맛있다고 느꼈습니다. 그런데
          내용이 엄청나게 많아지면 어떻게 표시되는지 확인해봐야 할 것 같아요...
        </div>
      </ReviewContent>
      <ReviewButton>리뷰더보기</ReviewButton>
    </ReviewDiv>
  );
}
export default Review;
