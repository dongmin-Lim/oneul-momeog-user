import styled from "styled-components";

const CardDiv = styled.div`
  display: inline-block;
  width: 350px;
  height: 200px;
  border: 1px solid #aaaaaa;
  margin: 20px;
  border-radius: 10px;
  background-color: white;
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

function Card() {
  return (
    <CardDiv>
      <RoomName>방 제목</RoomName>
      <RestaurantImg src="../data/img/bbq.jpg" />
      <Detail>
        <RestaurantName>bbq</RestaurantName>
        <RestaurantPeople>x/4명 참가중</RestaurantPeople>
        <RestaurantTime>남은시간 01:19</RestaurantTime>
      </Detail>
    </CardDiv>
  );
}
export default Card;
