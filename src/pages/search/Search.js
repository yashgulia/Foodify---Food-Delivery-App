import React, { useState } from "react";
import { filterData } from "../../utils/helper";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../../config";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filterRestaurant, setFilterRestaurant] = useState(null);
  const restaurants = useSelector((store) => store.cart.restaurants);

  return (
    <div className="min-h-screen py-20 mt-12 md:mt-20 px-4 md:px-8 lg:px-16 bg-richblack-900">
      {/* Search Header */}
      <div className="mb-8 animate-fadeIn">
        <h1 className="pb-6 text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-emerald-600 text-transparent bg-clip-text">
          Search Restaurants
        </h1>
        <div className="relative">
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search for restaurants..."
            className="w-full px-4 py-3 pl-12 rounded-lg bg-richblack-800 border border-emerald-700/30 focus:border-emerald-500 focus:outline-none text-gray-300 transition-all duration-300"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                const data = filterData(searchInput, restaurants);
                setFilterRestaurant(data);
              }
            }}
          />
          <svg
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <button
            onClick={() => {
              const data = filterData(searchInput, restaurants);
              setFilterRestaurant(data);
            }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 px-4 py-1 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition-colors duration-300"
            disabled={!searchInput.trim()}
          >
            Search
          </button>
        </div>
      </div>

      {/* Results Section */}
      {filterRestaurant && (
        <div className="md:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filterRestaurant.map((restaurant) => (
              <Link
                to={`/restaurant/${restaurant?.info?.id}`}
                key={restaurant?.info?.id}
                className="group bg-richblack-800 rounded-lg overflow-hidden border border-emerald-700/30 hover:border-emerald-500 transition-all duration-300 hover:-translate-y-1 animate-fadeIn"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={IMG_CDN_URL + restaurant?.info?.cloudinaryImageId}
                    alt={restaurant?.info?.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 bg-richblack-800/80 px-2 py-1 rounded-md">
                    <div className="flex items-center space-x-1">
                      <span className="text-emerald-400">⭐</span>
                      <span className="text-white text-sm font-medium">
                        {restaurant?.info?.avgRating}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="font-medium text-gray-200 text-lg truncate">
                    {restaurant?.info?.name}
                  </h3>
                  <p className="text-gray-400 text-sm truncate mt-1">
                    {restaurant?.info?.cuisines.slice(0, 3).join(", ")}
                    {restaurant?.info?.cuisines.length > 3 ? "..." : ""}
                  </p>
                  <div className="flex items-center justify-between mt-2 text-sm">
                    <span className="text-gray-400">
                      {restaurant?.info?.costForTwo}
                    </span>
                    <span className="text-gray-400">
                      {restaurant?.info?.sla?.deliveryTime} mins
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {filterRestaurant.length === 0 && (
            <div className="text-center text-gray-400 py-8">
              No restaurants found
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
