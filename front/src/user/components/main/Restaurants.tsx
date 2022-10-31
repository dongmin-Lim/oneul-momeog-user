import Card from "./Card";
import axios from "axios";
import { useEffect } from "react";

function Restaurants() {
  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(
          `http://211.188.65.107:8080/api/main/restaurants`
        );
        console.log(response);
      } catch (e) {
        console.log(e);
      }
    }
    getData();
  }, []);
  return (
    <div>
      <Card />
      <Card />
      <Card />
    </div>
  );
}
export default Restaurants;
