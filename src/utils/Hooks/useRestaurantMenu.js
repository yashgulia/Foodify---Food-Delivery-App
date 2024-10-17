import { useEffect, useState } from "react";

const useRestaurantMenu = (id, savedLocation) => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    getMenu();
  }, [id]);

  async function getMenu() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${savedLocation.latitude}&lng=${savedLocation.longitude}&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();
    setMenu(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  }

  return menu;
};

export default useRestaurantMenu;
