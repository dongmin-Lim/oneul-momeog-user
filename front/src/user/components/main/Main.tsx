import HorizonScroll from "./HorizonScroll";
import styled from "styled-components";
import Rooms from "./Rooms";
import Restaurants from "./Restaurants";
import SearchBar from "./SearchBar";
import SelectCategory from "./SelectCategory";

const RestaurantList = styled.div`
  text-align: center;
`;

function Main() {
  return (
    <div>
      <HorizonScroll />
      <SearchBar />
      <SelectCategory />
      <RestaurantList>
        <Rooms />
        <Restaurants />
      </RestaurantList>
    </div>
  );
}
export default Main;
