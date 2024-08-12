import { IMG_CDN_URL } from "../../config";

const RestaurantCard = ({
  name,
  avgRating,
  cuisines,
  cloudinaryImageId,
  areaName,
}) => {
  return (
    <div className="grid grid-flow-row gap-3">
      <div className="grid-rows-7">
        <img
          className="w-60 h-40 object-cover rounded-2xl"
          src={IMG_CDN_URL + cloudinaryImageId}
          alt={name}
        />
      </div>
      <div className="ml-3 grid-rows-5">
        <h3 className="font-bold text-lg">
          {name.length > 20 ? name.substr(0, 20) + "..." : name}
        </h3>
        <h4>⭐️ {avgRating}</h4>
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
