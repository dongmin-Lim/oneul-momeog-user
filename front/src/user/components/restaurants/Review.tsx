import { Rate } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ROUTES } from "../../../enum/routes";

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
        const response = await axios.get(`/api/restaurants/${restaurantId}/review`);
        setReviewInfo(response.data.data);
        console.log(response.data.data);
      } catch (e) {
        console.log(e);
      }
    }
    getReviewData();
  }, []);

  return (
    <ReviewDiv>
      {reviewInfo === null ? (
        <div>리뷰가 없습니다</div>
      ) : (
        <>
          <ReviewImg src={"http://175.45.208.84" + reviewInfo?.reviewImage}></ReviewImg>
          <ReviewContent>
            <ReviewLabel>추천리뷰</ReviewLabel>
            <div style={{ padding: "5px 0px" }}>
              <span>{reviewInfo?.nickname}</span>
              <div style={{ display: "flex" }}>
                <Rate
                  disabled
                  defaultValue={reviewInfo?.rating}
                  style={{ fontSize: 16 }}
                />
              </div>
            </div>
            <div>{reviewInfo?.content}</div>
          </ReviewContent>
          <Link to={ROUTES.USER.REVIEW} state={{ restaurantId: restaurantId }}>
            <ReviewButton>리뷰더보기</ReviewButton>
          </Link>
        </>
      )}
    </ReviewDiv>
  );
}

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
export default Review;
