import React, { useState } from "react";
import { filterData } from "../utils/helper";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantDetails/RestaurantCard";
import image from "../config";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filterRestaurant, setFilterRestaurant] = useState(null);
  const restaurant = useSelector((store) => store.cart.restaurants);

  return (
    <div className="h-max">
      <div className="w-[860px] mx-auto">
        <div className="sticky bg-white top-20 pt-12 pb-2">
          <div className="h-12 border border-gray-400">
            <div className="flex pr-3 justify-between items-center">
              <div className="h-12 w-[830px] pl-4">
                <input
                  className="h-11 w-[790px] focus:outline-none"
                  type="text"
                  placeholder="Search for restaurants"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                />
              </div>
              <div>
                <button
                  onClick={() => {
                    const data = filterData(searchInput, restaurant);
                    setFilterRestaurant(data);
                  }}
                  disabled={!searchInput.trim()}
                >
                  🔍
                </button>
              </div>
            </div>
          </div>
        </div>

        {filterRestaurant ? (
          <div className="mt-24 pl-24 h-max">
            <div className="grid grid-cols-2 gap-8 my-8 overflow-auto">
              {filterRestaurant.map((rest) => (
                <Link to={`/restaurant/${rest?.info?.id}`} key={rest?.info?.id}>
                  <RestaurantCard {...rest?.info} />
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-32 h-[400px]">
            <div className="w-full h-12">
              <h2 className="pt-4 font-extrabold text-xl pl-3">
                Popular Cuisines
              </h2>
            </div>
            <div className="py-3 px-4 my-2 h-36">
              <div className="flex flex-col overflow-x-scroll overflow-y-hidden hide-scrollbar">
                <div className="flex">
                  {image.map((i, index) => {
                    return (
                      <div className="mr-3" key={index}>
                        <div className="w-20 h-28">
                          <button>
                            <img src={i.imge} alt={i.name} />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
