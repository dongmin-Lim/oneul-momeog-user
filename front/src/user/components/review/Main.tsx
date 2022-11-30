import { Rate } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { ROUTES } from "../../../enum/routes";

const Div = styled.div`
  /* text-align: center; */
  /* margin: 0 auto; */
`;

const Back = styled.div`
  padding: 30px;
  color: black;
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
`;

const Review = styled.div`
  /* text-align: center; */
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-column-gap: 30px;
  width: 1000px;
  height: 360px;
  border-top: 1px solid #aaa;
  border-bottom: 1px solid #aaa;
  margin: 0 auto;
  margin-top: 50px;
  padding: 30px;
`;

const Content = styled.div`
  display: grid;
  grid-template-rows: 1fr 2fr 1fr;
  height: 300px;
`;

const Img = styled.img`
  width: 100%;
`;

interface ReviewsProps {
  userId: 1;
  nickname: string;
  reviewId: 1;
  rating: 3;
  content: string;
  reviewImage: string;
  restaurantContent: string;
  createdAt: string;
}

function Main() {
  const [reviews, setReviews] = useState<ReviewsProps[]>();
  const location = useLocation();
  const restaurantId = location.state.restaurantId;

  useEffect(() => {
    async function getReviewData() {
      try {
        const response = await axios.get(
          // `/mockdata/review.json`
          `/api/restaurants/${restaurantId}/review/list`
        );
        setReviews(response.data.data);
        console.log(response.data);
      } catch (e) {
        console.log(e);
      }
    }
    getReviewData();
  }, []);

  return (
    <Div>
      <Link to={ROUTES.USER.RESTAURANTS} state={{ restaurantId: restaurantId }}>
        <Back>← 돌아가기</Back>
      </Link>

      {reviews?.map((value, index) => (
        <Review key={index}>
          <Content>
            <div>
              <div>{value.nickname}님</div>
              <Rate disabled defaultValue={value.rating} /> {`  ${value.rating}점`}
            </div>
            <div>{value.content}</div>
          </Content>
          <Img
            src={`http://springboot-user-svc:8080/api/image?imageUrl=${value.reviewImage}`}
            alt="review_img"
          />
        </Review>
      ))}
    </Div>
  );
}

export default Main;
