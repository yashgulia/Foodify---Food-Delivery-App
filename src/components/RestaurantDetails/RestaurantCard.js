const RestaurantCard = () => {
  return (
    <div className="grid grid-flow-row gap-3">
      <div className="grid-rows-7">
        <img
          className="w-60 h-40 object-cover rounded-2xl"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/8/5/3ad62044-80e3-4134-b356-824bc8d33e40_800675.JPG"
          alt="Bakingo"
        />
      </div>
      <div className="ml-3 grid-rows-5">
        <h3 className="font-bold text-lg">Bakingo</h3>
        <h4>⭐️ 4.6</h4>
        <h5>Bakery, Desserts, Beverages</h5>
        <h5>Near Shree Bikaner Sweets</h5>
      </div>
    </div>
  );
};

export default RestaurantCard;
