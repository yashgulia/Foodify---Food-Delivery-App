import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/Hooks/useRestaurantMenu";
import RestaurantCard from "../RestaurantDetails/RestaurantCard";
import RestaurantMenuCard from "../RestaurantDetails/RestaurantMenuCard";

const RestaurantMenu = () => {
  const { id } = useParams();

  const [menu, setMenu] = useState([]);
  const [recommended, setRecommended] = useState([]);

  useEffect(() => {
    getMenu();
  }, []);

  async function getMenu() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65200&lng=77.16630&restaurantId=" +
        id +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
    setMenu(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    setRecommended(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    );
  }
  // const menu = useRestaurantMenu(id);

  // const [restMenu, setRestMenu] = useState([]);

  // useEffect(() => {
  //   setRestMenu(menu[2]?.card?.card?.itemCards[0]?.card?.info);
  // }, []);
  console.log(menu);
  console.log(recommended);
  return (
    <div>
      {recommended && <RestaurantMenuCard {...recommended[0]?.card?.info} />}
    </div>
  );
};

export default RestaurantMenu;
