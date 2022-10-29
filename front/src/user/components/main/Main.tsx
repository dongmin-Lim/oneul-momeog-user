import HorizonScroll from "./HorizonScroll";
import styled from "styled-components";
import Rooms from "./Rooms";
import Restaurants from "./Restaurants";
import SearchBar from "./SearchBar";
import SelectCategory from "./SelectCategory";
import { useState } from "react";

const Div = styled.div`
  text-align: center;
`;

function Main() {
  const [mode, setMode] = useState<number>(0);
  return (
    <Div>
      <HorizonScroll />
      <SearchBar setMode={setMode} mode={mode} />
      <SelectCategory />
      {mode ? <Restaurants /> : <Rooms />}
    </Div>
  );
}
export default Main;
