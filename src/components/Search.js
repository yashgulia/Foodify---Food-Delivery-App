import React from "react";

const Search = () => {
  return (
    <div className="bg-gray-50 h-screen">
      <div className=" w-[860px] mx-auto ">
        <div className="sticky pt-12 pb-2">
          <div className="h-12  border border-gray-400 ">
            <div className="flex pr-3 justify-between items-center">
              <div className="h-12 w-[830px] pl-4">
                <input
                  className="bg-gray-50 h-11 w-[790px] focus:outline-none"
                  type="text"
                  placeholder="Search for restaurants"
                  value=""
                />
              </div>
              <div>
                <button onClick={() => {}}>🔍</button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-32 h-52">
          <div className="w-full h-12">
            <h2 className="pt-4 font-extrabold text-xl pl-3">
              Popular Cuisines
            </h2>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Search;
