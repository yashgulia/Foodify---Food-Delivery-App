import RestaurantCard from "../RestaurantDetails/RestaurantCard";
import useRestaurant from "../../utils/Hooks/useRestaurant";
import { Link } from "react-router-dom";
import Shimmer from "../Shimmer/Shimmer";
import { useDispatch } from "react-redux";
import { addRestaurant } from "../../utils/Redux/cartSlice";
import { useCallback, useEffect, useState } from "react";
import ShimmerCard from "../Shimmer/ShimmerCard";
import { FOOTER, ITEMS_PER_PAGE, DELAY } from "../../config";
import useGeolocation from "../../utils/Hooks/useGeolocation";

const Body = () => {
  const { location, loading } = useGeolocation();

  const restaurants = useRestaurant(location);

  console.log(restaurants);

  useEffect(() => {
    sessionStorage.setItem("userLocation", JSON.stringify(location));
  }, []);

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

  if (loading) {
    return <Shimmer name={"great food"} />; // Show loading state
  }

  return restaurants?.length === 0 ? (
    <Shimmer name={"great food"} />
  ) : (
    <div className="w-screen bg-gradient-to-b from-white via-emerald-700 to-emerald-900">
      <div className="mx-4 lg:mx-28">
        <div>
          <h2 className="text-2xl mt-32 md:hidden my-9 font-bold">
            All Restaurants Nearby
          </h2>

          <h2 className="text-2xl mt-32 hidden md:block my-9 font-bold">
            Restaurants with online food delivery
          </h2>
        </div>
        <div className="hidden sm:flex items-center h-11 flex-wrap my-4">
          <div className="border border-black rounded-2xl mb-2 h-9 mr-2 px-3 py-2 text-sm text-nowrap">
            Filter
          </div>
          <div className="border border-black rounded-2xl mb-2 w-auto h-9 mr-2 px-3 py-2 text-sm text-nowrap">
            Sort By
          </div>
          <div className="border border-black rounded-2xl mb-2 h-9 mr-2 px-3 py-2 text-sm text-nowrap">
            Fast Delivery
          </div>
          <div className="border border-black rounded-2xl mb-2 h-9 mr-2 px-3 py-2 text-sm text-nowrap">
            New on Foodify
          </div>
          <div className="border border-black rounded-2xl mb-2 h-9 mr-2 px-3 py-2 text-sm text-nowrap">
            Ratings 4.0+
          </div>
          <div className="border border-black rounded-2xl mb-2 h-9 mr-2 px-3 py-2 text-sm text-nowrap">
            Pure Veg
          </div>
          <div className="border border-black rounded-2xl mb-2 h-9 mr-2 px-3 py-2 text-sm text-nowrap">
            Offers
          </div>
          <div className="border border-black rounded-2xl mb-2 h-9 mr-2 px-3 py-2 text-sm text-nowrap">
            Rs. 300-Rs. 600
          </div>
          <div className="border border-black rounded-2xl mb-2 h-9 mr-2 px-3 py-2 text-sm text-nowrap">
            Less than Rs. 300
          </div>
        </div>
        <div className="md:grid grid-cols-4 gap-8 py-12 ">
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
    </div>
  );
};

export default Body;
