import styled from "styled-components";

const CardDiv = styled.div`
  display: inline-block;
  width: 400px;
  height: 250px;
  border: 1px solid black;
  margin: 20px;
  border-radius: 10px;
`;

const RestaurantImg = styled.img`
  height: 200px;
  width: 300px;
  padding: 20px;
  border: 1px solid blue;
`;

const RestaurantName = styled.div`
  height: 30px;
  width: 80px;
  border: 1px solid #808080;
  border-radius: 5px;
  align-self: center;
  justify-self: center;
`;

const RestaurantPeople = styled.div`
  height: 30px;
  width: 150px;
  border: 1px solid #808080;
  border-radius: 5px;
  align-self: center;
  justify-self: center;
`;

const RestaurantTime = styled.div`
  height: 30px;
  width: 130px;
  border: 1px solid #808080;
  border-radius: 5px;
  align-self: center;
  justify-self: center;
`;

const Detail = styled.div`
  display: grid;
  grid-template-columns: 100px 150px 150px;
  height: 50px;
  line-height: 30px;
`;

function Card() {
  return (
    <CardDiv>
      <RestaurantImg src="../data/img/logo.png" />
      <Detail>
        <RestaurantName>bbq</RestaurantName>
        <RestaurantPeople>x/4명 참가중</RestaurantPeople>
        <RestaurantTime>남은시간 01:19</RestaurantTime>
      </Detail>
    </CardDiv>
  );
}
export default Card;
