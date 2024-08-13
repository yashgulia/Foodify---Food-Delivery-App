const RestaurantMenuCard = () => {
  return (
    <div>
      <div className="mx-80 my-10">
        <button className="mb-6">
          <h3 className="font-bold text-lg">Recommended</h3>
        </button>
        <div className="w-[768px] h-44">
          <div className="flex justify-between">
            <div className="text-sm py-1">
              <div className="text-[18px] mt-2 font-bold">
                Combo for 1 Non-veg
              </div>
              <div className="mt-1 text-sm font-medium">Rs 379</div>
              <div className="mt-3 text-sm">* 4.7</div>
              <div className="text-sm mt-3">Serves 1</div>
            </div>
            <div className="w-40">
              <img
                className=" h-36 rounded-xl object-cover"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/440c06ace44b931b729d9b6a090aba07"
                alt="rest"
              />
              <div className="h-11 relative left-2/4 bottom-7 z-10 -translate-x-16">
                <button className="w-28 h-10 shadow-lg rounded-lg font-extrabold text-lg text-green-600 bg-white">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b-[0.5px] border-gray-500 h-[.5px] my-5"></div>
      </div>
    </div>
  );
};

export default RestaurantMenuCard;
