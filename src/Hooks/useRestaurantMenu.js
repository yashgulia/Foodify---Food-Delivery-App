import { useEffect, useState } from "react";

const useRestaurantMenu = (id, savedLocation) => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    if (id && savedLocation?.latitude && savedLocation?.longitude) {
      getMenu();
    } else {
      console.error("Missing Restaurant ID or Location Data");
    }
  }, [id, savedLocation]);

  async function getMenu() {
    try {
      const response = await fetch(
        `/api/restaurantMenu?id=${id}&latitude=${savedLocation.latitude}&longitude=${savedLocation.longitude}`
      );

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      const json = await response.json();

      setMenu(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    } catch (error) {
      console.error("Error fetching restaurant menu:", error.message);
    }
  }

  return menu;
};

export default useRestaurantMenu;
