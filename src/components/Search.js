import React, { useState } from "react";
import { filterData } from "../utils/helper";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantDetails/RestaurantCard";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filterRestaurant, setFilterRestaurant] = useState(null);
  const restaurant = useSelector((store) => store.cart.restaurants);

  // return !filterRestaurant ? (
  //   <div className="h-max">
  //     <div className=" w-[860px] mx-auto ">
  //       <div className="sticky pt-12 pb-2">
  //         <div className="h-12  border border-gray-400 ">
  //           <div className="flex pr-3 justify-between items-center">
  //             <div className="h-12 w-[830px] pl-4">
  //               <input
  //                 className="h-11 w-[790px] focus:outline-none"
  //                 type="text"
  //                 placeholder="Search for restaurants"
  //                 value={searchInput}
  //                 onChange={(e) => {
  //                   setSearchInput(e.target.value);
  //                 }}
  //               />
  //             </div>
  //             <div>
  //               <button
  //                 onClick={() => {
  //                   const data = filterData(searchInput, restaurant);
  //                   setFilterRestaurant(data);
  //                 }}
  //               >
  //                 🔍
  //               </button>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="mt-32 h-52">
  //         <div className="w-full h-12">
  //           <h2 className="pt-4 font-extrabold text-xl pl-3">
  //             Popular Cuisines
  //           </h2>
  //         </div>
  //         <div></div>
  //       </div>
  //     </div>
  //   </div>
  // ) : (
  //   <div className="h-max">
  //     <div className=" w-[860px] mx-auto">
  //       <div className="sticky pt-12 pb-2">
  //         <div className="h-12  border border-gray-400 ">
  //           <div className="flex pr-3 justify-between items-center">
  //             <div className="h-12 w-[830px] pl-4">
  //               <input
  //                 className="h-11 w-[790px] focus:outline-none"
  //                 type="text"
  //                 placeholder="Search for restaurants"
  //                 value={searchInput}
  //                 onChange={(e) => {
  //                   setSearchInput(e.target.value);
  //                 }}
  //               />
  //             </div>
  //             <div>
  //               <button
  //                 onClick={() => {
  //                   const data = filterData(searchInput, restaurant);
  //                   setFilterRestaurant(data);
  //                 }}
  //               >
  //                 🔍
  //               </button>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="mt-24 pl-24 h-max ">
  //         <div className="grid grid-cols-2 gap-8 my-8 overflow-auto">
  //           {filterRestaurant.map((restaurant) => {
  //             return (
  //               <Link
  // to={"/restaurant/" + restaurant?.info?.id}
  //                 key={restaurant?.info?.id}
  //               >
  //                 <RestaurantCard {...restaurant?.info} />
  //               </Link>
  //             );
  //           })}
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <div className="h-max">
      <div className="w-[860px] mx-auto">
        <div className="sticky pt-12 pb-2">
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
          <div className="mt-32 h-52">
            <div className="w-full h-12">
              <h2 className="pt-4 font-extrabold text-xl pl-3">
                Popular Cuisines
              </h2>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
