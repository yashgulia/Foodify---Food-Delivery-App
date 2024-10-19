import { IMG_CDN_URL } from "../../config";

const RestaurantCard = ({
  name,
  avgRating,
  cuisines,
  cloudinaryImageId,
  areaName,
}) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-1  gap-3 mb-12 md:mb-0">
      <div className="grid-rows-7 justify-self-center">
        <img
          className="w-44 h-36 md:w-60 md:h-40 object-cover rounded-2xl shadow-lg brightness-90 hover:brightness-110"
          src={IMG_CDN_URL + cloudinaryImageId}
          alt={name}
        />
      </div>
      <div className="md:ml-3 grid-rows-5">
        <h3 className="font-bold text-base md:text-lg mb-1 md:mb-0">
          {name.length > 20 ? name.substr(0, 20) + "..." : name}
        </h3>
        <h4 className="font-semibold mb-1 md:mb-0">⭐️ {avgRating}</h4>
        <h5>
          {cuisines.join(", ").length > 28
            ? cuisines.join(", ").substr(0, 29) + "..."
            : cuisines.join(", ")}
        </h5>
        <h5>{areaName}</h5>
      </div>
    </div>
  );
};

export default RestaurantCard;
