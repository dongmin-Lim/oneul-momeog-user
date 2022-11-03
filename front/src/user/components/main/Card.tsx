import styled from "styled-components";
import { Link } from "react-router-dom";
import { roomsProps } from "./Restaurants";

interface ValueProps {
  value: roomsProps;
}

const CardDiv = styled.div`
  display: inline-block;
  width: 350px;
  height: 200px;
  border: 1px solid #aaaaaa;
  margin: 20px;
  border-radius: 10px;
  background-color: white;
  color: black;
`;

const RoomName = styled.div`
  width: 80px;
  height: 30px;
  line-height: 30px;
  font-size: 20px;
`;

const RestaurantImg = styled.img`
  height: 120px;
  width: 250px;
  padding: 20px;
`;

const Detail = styled.div`
  display: grid;
  grid-template-columns: 70px 140px 140px;
  height: 50px;
  line-height: 30px;
`;

const RestaurantName = styled.div`
  height: 30px;
  width: 55px;
  border: 1px solid #808080;
  border-radius: 5px;
  align-self: center;
  justify-self: center;
`;

const RestaurantPeople = styled.div`
  height: 30px;
  width: 120px;
  border: 1px solid #808080;
  border-radius: 5px;
  align-self: center;
  justify-self: center;
`;

const RestaurantTime = styled.div`
  height: 30px;
  width: 120px;
  border: 1px solid #808080;
  border-radius: 5px;
  align-self: center;
  justify-self: center;
`;

function Card({ value }: ValueProps) {
  const restaurantId = value.restaurantId;
  return (
    <Link to={`/restaurants/${restaurantId}`} state={{ restaurantId: restaurantId }}>
      <CardDiv>
        <RoomName>{value.roomName}</RoomName>
        <RestaurantImg src="../data/img/bbq.jpg" />
        <Detail>
          <RestaurantName>{value.restaurantName}</RestaurantName>
          <RestaurantPeople>
            {value.currentPeople}/{value.maxPeople}명 참가중
          </RestaurantPeople>
          <RestaurantTime>남은시간 01:19</RestaurantTime>
        </Detail>
      </CardDiv>
    </Link>
  );
}
export default Card;
