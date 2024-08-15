import RestaurantCard from "../RestaurantDetails/RestaurantCard";
import useRestaurant from "../../utils/Hooks/useRestaurant";
import { Link } from "react-router-dom";
import Shimmer from "../Shimmer";

const Body = () => {
  const restaurants = useRestaurant();

  return restaurants?.length === 0 ? (
    <Shimmer />
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
          {restaurants.map((restaurant) => {
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
      </div>
    </>
  );
};

export default Body;
