import { useState, useEffect } from "react";

const useRestaurant = (location) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    if (location.latitude && location.longitude) {
      getRestaurant();
    }
  }, [location]);

  async function getRestaurant() {
    try {
      const response = await fetch(
        `/api/restaurant?latitude=${location.latitude}&longitude=${location.longitude}`
      );

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      const json = await response.json();

      setRestaurants(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants ||
          json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
      );
    } catch (error) {
      console.error("Error fetching restaurants:", error.message);
    }
  }

  return restaurants;
};

export default useRestaurant;
