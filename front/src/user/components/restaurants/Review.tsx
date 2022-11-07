import axios from "axios";
import { useEffect, useState } from "react";
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
  width: 120px;
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

interface reviewProps {
  userId: number;
  nickname: string;
  reviewId: number;
  rating: number;
  content: string;
  reviewImage: string;
  createdAt: string;
}

function Review({ restaurantId }: any) {
  const [reviewInfo, setReviewInfo] = useState<reviewProps>();

  useEffect(() => {
    async function getReviewData() {
      try {
        const response = await axios.get(
          `http://211.188.65.107:8080/api/restaurants/${restaurantId}/review`
        );
        setReviewInfo(response.data.data);
      } catch (e) {
        console.log(e);
      }
    }
    getReviewData();
  }, []);

  return (
    <ReviewDiv>
      <ReviewImg src={reviewInfo?.reviewImage}></ReviewImg>
      <ReviewContent>
        <ReviewLabel>추천리뷰</ReviewLabel>
        <div style={{ padding: "5px 0px" }}>
          <span>{reviewInfo?.nickname}</span>
          <span>⭐️⭐️⭐️⭐️⭐️ 5</span>
        </div>
        <div>{reviewInfo?.content}</div>
      </ReviewContent>
      <ReviewButton>리뷰더보기</ReviewButton>
    </ReviewDiv>
  );
}
export default Review;
