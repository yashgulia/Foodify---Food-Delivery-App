import RestaurantCard from "../../components/core/RestaurantCard/RestaurantCard";
import useRestaurant from "../../Hooks/useRestaurant";
import { Link } from "react-router-dom";
import Shimmer from "../../components/common/Shimmer/Shimmer";
import { useDispatch } from "react-redux";
import { addRestaurant } from "../../Redux/cartSlice";
import { useCallback, useEffect, useState } from "react";
import ShimmerCard from "../../components/common/Shimmer/ShimmerCard";
import { FOOTER, ITEMS_PER_PAGE, DELAY } from "../../config";
import useGeolocation from "../../Hooks/useGeolocation";
import RestaurantSlider from "../../components/core/Body/RestaurantSlider";

const Body = () => {
  const { location, loading } = useGeolocation();

  const restaurants = useRestaurant(location);

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
    <div className="w-11/12 mx-auto pt-40 pb-20">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 via-lime-400 to-emerald-600 text-transparent bg-clip-text">
          Delicious Food Delivered
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Discover the best food and drinks from local restaurants delivered to
          your doorstep
        </p>
      </div>

      {/* Featured Restaurants Slider */}
      {displayedRestaurants?.length > 0 && (
        <>
          <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-lime-400 to-emerald-600">
            Featured Restaurants
          </h2>
          <RestaurantSlider restaurants={displayedRestaurants} />
        </>
      )}

      {/* All Restaurants Section */}
      <div className="mt-20">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-lime-400 to-emerald-600">
            All Restaurants Nearby
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayedRestaurants.map((restaurant) => (
            <Link
              to={"/restaurant/" + restaurant?.info?.id}
              key={restaurant?.info?.id}
              className="transform hover:-translate-y-1 transition-transform duration-200"
            >
              <RestaurantCard {...restaurant?.info} />
            </Link>
          ))}
        </div>

        {/* Loading State */}
        {hasMore && (
          <div className="mt-20">
            <ShimmerCard />
          </div>
        )}
      </div>
    </div>
  );
};

export default Body;
