import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/Hooks/useRestaurantMenu";
import RestaurantCard from "../RestaurantDetails/RestaurantCard";
import RestaurantMenuCard from "../RestaurantDetails/RestaurantMenuCard";

const RestaurantMenu = () => {
  const { id } = useParams();

  const [menu, setMenu] = useState([]);
  const [title, setTitle] = useState();
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
    json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card?.itemCards
      ? setRecommended(
          json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
            ?.card?.card?.itemCards
        )
      : setRecommended(
          json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
            ?.card?.card?.categories[0].itemCards
        );
    setTitle(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.title
    );
  }
  console.log(menu);
  console.log(recommended);
  return (
    <div className="mx-80 my-10">
      <button className="mb-6">
        <h3 className="font-bold text-lg">{title}</h3>
      </button>
      {recommended &&
        recommended.map((restaurant) => {
          return (
            <RestaurantMenuCard
              key={restaurant?.card?.info?.id}
              {...restaurant?.card?.info}
            />
          );
        })}
    </div>
  );
};

export default RestaurantMenu;
