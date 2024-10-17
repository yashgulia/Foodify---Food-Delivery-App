import { useState, useEffect } from "react";

const useRestaurant = (location) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    if (location.latitude && location.longitude) {
      getRestaurant();
    }
  }, [location]);

  async function getRestaurant() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${location.latitude}&lng=${location.longitude}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
    );
    const json = await data.json();
    setRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  return restaurants;
};

export default useRestaurant;
