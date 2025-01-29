import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantMenuCard from "../../components/core/RestaurantMenu/RestaurantMenuCard";
import useRestaurantMenu from "../../Hooks/useRestaurantMenu";
import Shimmer from "../../components/common/Shimmer/Shimmer";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [title, setTitle] = useState();
  const [recommended, setRecommended] = useState(null);
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  const savedLocation = JSON.parse(sessionStorage.getItem("userLocation"));
  const menu = useRestaurantMenu(id, savedLocation);

  useEffect(() => {
    if (menu) {
      const basicInfo = menu[0]?.card?.card?.info || {};
      setRestaurantInfo(basicInfo);

      const cards = menu[2]?.card?.card;
      if (cards) {
        setRecommended(cards.itemCards || cards.categories[0]?.itemCards || []);
        setTitle(cards.title || "");
      }
    }
  }, [menu]);

  if (!recommended) return <Shimmer name={"great food"} />;

  return (
    <div className="min-h-screen bg-[#0A0F1C] pt-16">
      {/* Menu Section */}
      <div className="max-w-6xl mt-20 pb-20 mx-auto p-4">
        <div className="mb-6">
          <h2 className="text-3xl text-white font-semibold flex items-center gap-3">
            {title || "Menu"}
            <span className="text-gray-400 text-lg font-normal">
              ({recommended.length} ITEMS)
            </span>
          </h2>
        </div>

        {/* Menu Items */}
        <div className="space-y-4">
          {recommended.map((restaurant) => (
            <div
              key={restaurant?.card?.info?.id}
              className="bg-[#0D1321] rounded-lg p-4"
            >
              <RestaurantMenuCard {...restaurant?.card?.info} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default RestaurantMenu;
