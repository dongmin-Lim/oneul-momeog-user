import styled from "styled-components";
import { Link } from "react-router-dom";
import TimeCalculator from "../../../components/TimeCalculator";

interface ValueProps {
  value: any;
  roomType: string;
}

function Card({ value, roomType }: ValueProps) {
  const restaurantId = value.restaurantId;
  const roomId = value.roomId;

  return (
    <Link
      to={`/restaurants/${restaurantId}`}
      state={{ restaurantId: restaurantId, roomId: roomId, roomType: roomType }}
    >
      <CardDiv>
        {value.roomName ? (
          <RoomName>{value.roomName}</RoomName>
        ) : (
          <RoomName>{value.restaurantName}</RoomName>
        )}

        <RestaurantImg src="../data/img/restaurant.png" />
        {value.roomName ? (
          <RestaurantName>{value.restaurantName}</RestaurantName>
        ) : (
          <RoomName></RoomName>
        )}
        <Detail>
          {value.currentPeople ? (
            <RestaurantPeople>
              {value.currentPeople}/{value.maxPeople}명 참가중
            </RestaurantPeople>
          ) : (
            <></>
          )}
          {value.dueTime ? (
            <RestaurantTime>
              <TimeCalculator currentTime={value.currentTime} dueTime={value.dueTime} />
            </RestaurantTime>
          ) : (
            <></>
          )}
        </Detail>
      </CardDiv>
    </Link>
  );
}
const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  height: 200px;
  border: 1px solid #aaaaaa;
  margin: 20px;
  border-radius: 10px;
  background-color: white;
  color: black;
  text-decoration: none;
`;

const RoomName = styled.div`
  width: 100%;
  height: 30px;
  line-height: 30px;
  font-size: 20px;
`;

const RestaurantImg = styled.img`
  height: 100px;
  width: 250px;
  padding: 20px;
`;

const RestaurantName = styled.div`
  height: 30px;
  width: 100%;
  justify-self: center;
`;

const Detail = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  height: 50px;
  line-height: 30px;
  justify-items: center;
  align-items: center;
`;

const RestaurantPeople = styled.div`
  height: 30px;
  width: 150px;
  border: 1px solid #808080;
  border-radius: 5px;
`;

const RestaurantTime = styled.div`
  height: 30px;
  width: 150px;
  border: 1px solid #808080;
  border-radius: 5px;
`;
export default Card;
