import React from "react";
import RestaurantCard from "../RestaurantDetails/RestaurantCard";
import { restaurantList } from "../../config";

const Body = () => {
  console.log(restaurantList);
  return (
    <div className="mx-40">
      <div className="grid grid-cols-4 gap-8 my-8 mx-4">
        {restaurantList.map((restaurant) => {
          return <RestaurantCard {...restaurant.info} />;
        })}
      </div>
    </div>
  );
};

export default Body;
