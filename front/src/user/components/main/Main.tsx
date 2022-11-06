import HorizonScroll from "./HorizonScroll";
import styled from "styled-components";
import Rooms from "./Rooms";
import Restaurants from "./Restaurants";
import SearchBar from "./SearchBar";
import SelectCategory from "./SelectCategory";
import { useEffect, useState } from "react";
import AddressModal from "../../../components/AddressModal";

export interface listsProps {
  restaurantId: number;
  restaurantName: string;
  restaurantImage: string;
  meanRating: number;
  specificAddress: string;
  branch: string;
}

export interface SearchProps {
  search: string;
  page: number;
}

export interface RestaurantTypeProps {
  categoryId: number;
}

const Div = styled.div`
  text-align: center;
`;

function Main() {
  const [searchObj, setSearchObj] = useState<SearchProps>({
    search: "",
    page: 1,
  });

  const [lists, setLists] = useState<listsProps[]>([]);
  const [categories, setCategories] = useState<RestaurantTypeProps[]>([]);
  const [mode, setMode] = useState<string>("rooms");
  const [isModal, setIsModal] = useState<boolean>(false);
  const [roomType, setRoomType] = useState("");

  useEffect(() => {
    var param = document.location.href.split("/");
    if (param[param.length - 1] !== "address") {
      if (sessionStorage.getItem("normalAddress") === "null") {
        setIsModal(true);
      }
    }
  }, []);
  return (
    <Div>
      {isModal ? <AddressModal setIsModal={setIsModal} /> : <></>}
      <HorizonScroll roomType={roomType} setRoomType={setRoomType} />
      <SearchBar
        setLists={setLists}
        mode={mode}
        setMode={setMode}
        searchObj={searchObj}
        setSearchObj={setSearchObj}
        categories={categories}
        setCategories={setCategories}
      />
      <SelectCategory categories={categories} setCategories={setCategories} />
      {mode === "rooms" ? (
        <Rooms lists={lists} roomType={roomType} setRoomType={setRoomType} />
      ) : (
        <Restaurants lists={lists} roomType={roomType} setRoomType={setRoomType} />
      )}
    </Div>
  );
}
export default Main;
