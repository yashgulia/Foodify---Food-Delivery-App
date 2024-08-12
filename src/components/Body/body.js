import React, { useEffect, useState } from "react";
import RestaurantCard from "../RestaurantDetails/RestaurantCard";
import { restaurantList } from "../../config";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    getRestaurant();
  }, []);

  async function getRestaurant() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5128216&lng=76.9740996&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  console.log(restaurantList);
  return (
    <div className="mx-40">
      <div className="grid grid-cols-4 gap-8 my-8 mx-4">
        {restaurants.map((restaurant) => {
          return <RestaurantCard {...restaurant?.info} />;
        })}
      </div>
    </div>
  );
};

export default Body;
