import { useEffect, useState } from "react";

const useRestaurantMenu = (id, savedLocation) => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    getMenu();
  }, [id]);

  async function getMenu() {
    try {
      const response = await fetch(
        `/api/restaurantMenu?id=${id}&latitude=${savedLocation.latitude}&longitude=${savedLocation.longitude}`
      );
      const json = await response.json();
      setMenu(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  }

  return menu;
};

export default useRestaurantMenu;
