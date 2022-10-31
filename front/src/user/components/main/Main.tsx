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
  type Search = { search: string; page: number };
  type RestaurantType = { categoryId: number };

  const [searchObj, setSearchObj] = useState<Search>({
    search: "",
    page: 1,
  });
  const [categories, setCategories] = useState<RestaurantType[]>([]);
  const [mode, setMode] = useState<string>("rooms");
  return (
    <Div>
      <HorizonScroll />
      <SearchBar
        mode={mode}
        setMode={setMode}
        searchObj={searchObj}
        setSearchObj={setSearchObj}
        categories={categories}
        setCategories={setCategories}
      />
      <SelectCategory categories={categories} setCategories={setCategories} />
      {mode === "rooms" ? <Rooms /> : <Restaurants />}
    </Div>
  );
}
export default Main;
