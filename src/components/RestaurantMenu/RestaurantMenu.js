import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantMenuCard from "../RestaurantDetails/RestaurantMenuCard";
import useRestaurantMenu from "../../utils/Hooks/useRestaurantMenu";
import Shimmer from "../Shimmer/Shimmer";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [title, setTitle] = useState();
  const [recommended, setRecommended] = useState(null);

  const menu = useRestaurantMenu(id);

  useEffect(() => {
    if (menu) {
      const cards = menu[2]?.card?.card;
      if (cards) {
        setRecommended(cards.itemCards || cards.categories[0]?.itemCards || []);
        setTitle(cards.title || "");
      }
    }
  }, [menu]);

  return !recommended ? (
    <Shimmer name={"great food"} />
  ) : (
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
