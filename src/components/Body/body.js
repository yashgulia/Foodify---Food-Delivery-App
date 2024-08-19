import RestaurantCard from "../RestaurantDetails/RestaurantCard";
import useRestaurant from "../../utils/Hooks/useRestaurant";
import { Link } from "react-router-dom";
import Shimmer from "../Shimmer/Shimmer";
import { useDispatch } from "react-redux";
import { addRestaurant } from "../../utils/Redux/cartSlice";
import { useCallback, useEffect, useState } from "react";
import ShimmerCard from "../Shimmer/ShimmerCard";
import { FOOTER, ITEMS_PER_PAGE, DELAY } from "../../config";

const Body = () => {
  const restaurants = useRestaurant();
  const dispatch = useDispatch();

  const [displayedRestaurants, setDisplayedRestaurants] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [timeoutId, setTimeoutId] = useState(null);

  const loadMoreRestaurants = useCallback(() => {
    if (restaurants && restaurants.length > 0) {
      const newItems = restaurants.slice(0, currentPage * ITEMS_PER_PAGE);
      setDisplayedRestaurants(newItems);
      if (newItems.length >= restaurants.length) {
        setHasMore(false);
      }
    }
  }, [restaurants, currentPage]);

  const handleScroll = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    const newTimeoutId = setTimeout(() => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollTop + windowHeight >= documentHeight - FOOTER && hasMore) {
        setCurrentPage((prevPage) => prevPage + 1);
      }
    }, DELAY);

    setTimeoutId(newTimeoutId);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [handleScroll, hasMore, timeoutId]);

  useEffect(() => {
    loadMoreRestaurants();
  }, [loadMoreRestaurants, currentPage]);

  useEffect(() => {
    if (restaurants) {
      dispatch(addRestaurant(restaurants));
    }
  }, [restaurants, dispatch]);

  return restaurants?.length === 0 ? (
    <Shimmer name={"great food"} />
  ) : (
    <>
      <div className="mx-44">
        <div>
          <h2 className="text-2xl my-4 font-bold">
            Restaurants with online food delivery in Gurgaon
          </h2>
        </div>
        <div className="flex items-center h-11 w-[1048px]">
          <div className="border rounded-2xl h-9 mr-2 px-3 py-2 text-sm text-nowrap">
            Filter
          </div>
          <div className="border rounded-2xl w-auto h-9 mr-2 px-3 py-2 text-sm text-nowrap">
            Sort By
          </div>
          <div className="border rounded-2xl h-9 mr-2 px-3 py-2 text-sm text-nowrap">
            Fast Delivery
          </div>
          <div className="border rounded-2xl h-9 mr-2 px-3 py-2 text-sm text-nowrap">
            New on Foodify
          </div>
          <div className="border rounded-2xl h-9 mr-2 px-3 py-2 text-sm text-nowrap">
            Ratings 4.0+
          </div>
          <div className="border rounded-2xl h-9 mr-2 px-3 py-2 text-sm text-nowrap">
            Pure Veg
          </div>
          <div className="border rounded-2xl h-9 mr-2 px-3 py-2 text-sm text-nowrap">
            Offers
          </div>
          <div className="border rounded-2xl h-9 mr-2 px-3 py-2 text-sm text-nowrap">
            Rs. 300-Rs. 600
          </div>
          <div className="border rounded-2xl h-9 mr-2 px-3 py-2 text-sm text-nowrap">
            Less than Rs. 300
          </div>
        </div>
        <div className="grid grid-cols-4 gap-8 my-8 ">
          {displayedRestaurants.map((restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant?.info?.id}
                key={restaurant?.info?.id}
              >
                <RestaurantCard {...restaurant?.info} />
              </Link>
            );
          })}
        </div>
        {hasMore && <ShimmerCard />}
      </div>
    </>
  );
};

export default Body;
